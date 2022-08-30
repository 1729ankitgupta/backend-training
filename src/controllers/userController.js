const jwt = require('jsonwebtoken')
const userModel = require('../models/userModel')


const createUser = async function (req, res) {

  let data = req.body
  let savedData = await userModel.create(data)
  res.send({ msg: savedData })
}


const loginUser = async function (req, res) {
  let userName = req.body.emailId
  let password = req.body.password
  let user = await userModel.findOne({ emailId: userName, password: password })
  if (!user) {
    return res.send({ status: false, msg: "userName or password is incorrect" })
  }
  let token = await jwt.sign({ userId: user._id.toString() }, "arsh-plutonium")
  res.send({ status: true, data: token })
}



const getUserData = async function (req, res) {

  let userId = req.params.userId
  let userDetails = await userModel.findById(userId)
  if (!userDetails) {
    return res.send({ status: false, msg: "userId does not exist!" })
  }
  res.send({ status: true, data: userDetails })
}



const updateUserData = async function (req, res) {

  let userId = req.params.userId
  let userDetails = await userModel.findById(userId)
  if (!userDetails) {
    return res.send({ status: false, msg: "userId does not exist!" })
  }

  let userData = req.body
  let updatedUser = await userModel.findOneAndUpdate(
    { _id: userId },
    userData,
    { new: true })
  res.send({ status: true, data: updatedUser, })
}



const deleteUserData = async function (req, res) {

  let userId = req.params.userId
  let userDetails = await userModel.findById(userId)
  if (!userDetails) {
    return res.send({ status: false, msg: "userId does not exist!" })
  }
  let updateUser = await userModel.findOneAndUpdate(
    { _id: userId },
    { isDeleted: true },
    { new: true }
  )
  res.send({ status: true, data: updateUser })
}

const postMessage = async function (req, res) {
  let message = req.body.message
  let token = req.headers["x-auth-token"]
  if (!token){
   return res.send({ status: false, msg: "token must be present in the request header" })
  }
  let decode = jwt.verify(token, 'arsh-plutonium')
  

  if (!decode){
   return res.send({ status: false, msg: "token is not valid" })
  }
  let userToBeModified = req.params.userId
  
  let userLoggedIn = decode.userId

  //userId comparision to check if the logged-in user is requesting for their own data
  if (userToBeModified != userLoggedIn) return res.send({ status: false, msg: 'User logged is not allowed to modify the requested users data' })

  let user = await userModel.findById(req.params.userId)
  if (!user) return res.send({ status: false, msg: 'No such user exists' })

  let updatedPosts = user.posts
  //add the message to user's posts
  updatedPosts.push(message)
  let updatedUser = await userModel.findOneAndUpdate({ _id: user._id }, { posts: updatedPosts }, { new: true })

  //return the updated user document
  return res.send({ status: true, data: updatedUser })
}



module.exports.createUser = createUser
module.exports.loginUser = loginUser
module.exports.getUserData = getUserData
module.exports.updateUserData = updateUserData
module.exports.deleteUserData = deleteUserData
module.exports.postMessage = postMessage
