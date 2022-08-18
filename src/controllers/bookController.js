// const bookModel = require("../models/bookModel")

// const createbook = async function (req, res) {
//     let data = req.body
//     let savedData = await bookModel.create(data)
//     res.send({ msg: savedData })
// }

// const getbookData = async function (req, res) {
//     let allbook = await bookModel.find()
//     res.send({ msg: allbook })
// }



// module.exports.createbook = createbook
// module.exports.getbookData = getbookData


const BookModel= require("../models/bookModel")

//1 creating  all books data
const createBook= async function (req, res) {
    let data= req.body
    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}
const getAllBooks = async function (req, res) {
  let allUsers = await BookModel.find({});
  res.send({ msg: allUsers });
};

const booksData = async function (req, res) {
  let allBooks = await BookModel
    .find()
    .select({ bookName: 1, authorName: 1, _id: 0 });
  res.send({ msg: allBooks });
};

const getBooksInYear = async function (req, res) {
  let year = req.body.year;
  let allBooks1 = await BookModel.find({ year: year });
  res.send({ msg: allBooks1 });
};

const getparticularBOoks = async function (req, res) {
  let particularBooks = await BookModel.find(req.body);
  res.send({ msg: particularBooks });
};

const getXINRBooks = async function (req, res) {
  let indianBooks = await BookModel.find({ $in: ['100', '200', '500'] });

  res.send({ msg: indianBooks });
};

const getRandomBooks = async function (req, res) {
  let randomBooks = await BookModel.find({
    $or: [{ stockAvailable: true }, { totalpages: { $gt: 500 } }],
  });
  res.send({ msg: randomBooks });
};

module.exports.createBook = createBook
module.exports.getAllBooks = getAllBooks
module.exports.booksData = booksData
module.exports.getBooksInYear = getBooksInYear
module.exports.getparticularBOoks = getparticularBOoks
module.exports.getXINRBooks = getXINRBooks
module.exports.getRandomBooks = getRandomBooks