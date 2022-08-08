function trimString() {
    const stringSomething = " functionUp  "
    console.log("Before excute trim function ", stringSomething + ". ")
    console.log("After excute trim function ", stringSomething.trim() + ". ")
}
function changetoLowerCase() {
    const changetoLowerString = "ANKIT GUPTA"
    console.log(changetoLowerString)
    console.log(changetoLowerString.toLowerCase())
}
function changeToUpperCase() {
    const changetoUpperString = "ankit gupta"
    console.log(changetoUpperString)
    console.log(changetoUpperString.toUpperCase())
}
module.exports.trimString = trimString
module.exports.changetoLowerCase = changetoLowerCase
module.exports.changeToUpperCase = changeToUpperCase