const express = require('express');
const abc = require('../introduction/intro')

const logger = require("../logger/logger.js")
const helper = require("../util/helper")
const validator = require("../validator/formetter.js")
const lodash = require("lodash")
const router = express.Router();
router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    res.send('My second ever api!')

    logger.welcome();
    helper.printDate()
    helper.month()

    helper.batchInfo()
    validator.trimString()
    validator.changetoLowerCase()
    validator.changeToUpperCase()
    const year = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec",
    ];
    const result = lodash.chunk(year, 4)
    console.log(result)
    const odd1 = [1, 3, 5, 7, 11, 13, 15, 17, 19, 21]
    const result1 = lodash.tail(odd1)
    console.log(result1)

    const array4 = [['horror', 'The Shining'], ['drama', 'Titanic'], ['thriller', 'Shutter Island'], ['fantasy', 'Pans Labyrinth']]
    const result4 = lodash.fromPairs(array4)
    console.log(result4)
});


router.get('/test-you', function (req, res) {
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data', function (req, res) {

})
module.exports = router;



// adding this comment for no reason

