const express = require('express');
var bodyParser = require('body-parser');
const { default: mongoose } = require('mongoose');
const route = require('./routes/route.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://1729ankit:MSfnlOw77aSsseHm@cluster0.g9nthlr.mongodb.net/auth-1", {
    useNewUrlParser: true
})
    .then(() => console.log("MongoDB is connected"))
    .catch(err => console.log(err))

app.use(
    function (req, res, next) {
        const date = new Date()
        const ip = req.ip
        const rout = req.originalUrl
        //console.log(date,",",",",ip,rout)
        next()
    }
)

app.use('/', route);

app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});