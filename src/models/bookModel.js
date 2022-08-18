// /*====================================================assignment W4D5=================================================

// On similar lines as today's mongodb session ,  complete this assignment and submit explainer video for the same : a 
// book schema with bookname,  authorname , catageory , and year. create same 2 api for book i.e.: 1 api to create a new book
// and another api to get the  list of all books.*/

// const mongoose=require("mongoose");

// const bookSchema=new mongoose.Schema({
//     bookName:{
//         type:String,
//         unique:true,
//         require:true
//     }, 
//     authoreName:String,
//     category:{
//         type:String,
//         enum:["novel", "education", "stroy", "motivational"]
//     },
//     year:Number
// })
// module.exports=mongoose.model("book",bookSchema);

const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    bookName: {
        type: String,
        required: true
    },
    authorName: String,
    year: {
        type: Number,
        default: 2021
    },
    tags: [String],
    price: {
        indianPrice: Number,
        europeanPrice: Number,
    },
    totalPages: Number,
    stockAvailable: Boolean,
}, { timestamps: true });


module.exports = mongoose.model('Books', bookSchema)