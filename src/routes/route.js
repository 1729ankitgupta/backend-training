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



    //first problem
    router.get('/get-movies', function (req, res) { //student detail api he 
        let movies1 = ["shole ", "Rang de basanti", "dil mange more", "tiranga"]//api is implementation is used to send response for request
        res.send(movies1)//movies wala iske jese krna he
    })

    // second 
    router.get('/get-movie/:indexNumber', function (req, res) { //student detail api he 

        let movies = ['rang de basanti', 'The shining', 'Lord of the rings', 'batman begins']
        let index = req.params.indexNumber;
        console.log(movies[index])
        res.send(movies[index])
    })

    //Third wala solution 
    router.get('/get-moviess/:indexNumber', function (req, res) { //student detail api he 

        let moviesName = ['rang de basanti', 'The shining', 'Lord of the rings', 'batman begins']
        let index = req.params.indexNumber;

        if (index > moviesName.length) {
            return res.send("use a valid index  ")
        } else {

            res.send(moviesName[index])
        }
    })

    //forth 
    router.get('/get-/films', function (req, res) { //student detail api he    

        let moviesName = [{ "id": 1, "name": "The Shining" },
        { "id": 2, "name": "Incendies" },
        { "id": 3, "name": "Rang de Basanti" },
        { "id": 4, "name": "Finding Nemo" }]
        res.send(moviesName)
    })

    //5
    router.get("/films")

    // 5 problam
    router.get('/get-/films/:indexNumber', function (req, res) { //student detail api he    

        let moviesName = [{ "id": 1, "name": "The Shining" },
        { "id": 2, "name": "Incendies" },
        { "id": 3, "name": "Rang de Basanti" },
        { "id": 4, "name": "Finding Nemo" }]
        let index = req.params.indexNumber;
        if (index > moviesName.length) {
            return res.send("no movie exist with this id ")
        } else {
            res.send(moviesName[index])
        }
    })


    .get("/sol1", function (req, res) {
        //logic : sum of numbers is n(n+1)/2..so get sum of all numbers in array. now take sum of numbers till last digit in the array
        let arr = [1, 2, 3, 5, 6, 7]

        let total = 0;
        for (var i in arr) {
            total += arr[i];
        }

        let lastDigit = arr.pop()
        let consecutiveSum = lastDigit * (lastDigit + 1) / 2
        let missingNumber = consecutiveSum - total

        res.send({ data: missingNumber });
    });


    router.get("/sol2", function (req, res) {
        let arr = [33, 34, 35, 37, 38]
        let len = arr.length
        let total = 0
        for (i = 0; i < arr.length; i++) {
            total += arr[i];
        }
        let firstdigit = arr[0]
        let lastdigit = arr.pop()
        let ConsecutiveSum = (len + 1) * (firstdigit + lastdigit) / 2
        let missingnumber = ConsecutiveSum - total
        res.send({ data: missingnumber })

    })
   
});

  router.get("/test/:city", (req,res)=> {
     console.log(req)
        const id = req.query.id
        const cityname = req.params.city
        res.json(`${cityname} has ${id}`)
    })


router.get('/test-you', function (req, res) {
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data', function (req, res) {

})
module.exports = router;



// adding this comment for no reason




