// const express = require('express');
// const router = express.Router();
// // const UserModel= require("../models/userModel.js")
// // const UserController= require("../controllers/userController")
// const bookModel = require("../models/bookModel.js")
// const bookController = require("../controllers/bookController")

// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })

// // router.post("/createUser", UserController.createUser  )

// // router.get("/getUsersData", UserController.getUsersData)

// router.post("/createbook", bookController.createbook)

// router.get("/getbookData", bookController.getbookData)


// module.exports = router;


const express = require('express');
const router = express.Router();
const bookModel = require('../models/bookModel');
const bookController = require('../controllers/bookController');

router.get('/test-me', function (req, res) {
    res.send('My first ever api!');
});

router.post('/createBook', bookController.createBook);
router.get('/getAllBooks', bookController.getAllBooks);
router.get('/booksData', bookController.booksData);
router.get('/getBooksInYear', bookController.getBooksInYear);
router.get('/getparticularBOoks', bookController.getparticularBOoks);
router.get('/getXINRBooks', bookController.getXINRBooks);
router.get('/getRandomBooks', bookController.getRandomBooks);

module.exports = router;