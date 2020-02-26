var express = require('express');
var bodyParser = require("body-parser");
const delay = require('delay');
const db = require('./db');

var app = express();

var urlencodedParser = bodyParser.urlencoded({extended: false});

app.get('/tstform', urlencodedParser, function (req, res) {
    //response.sendFile(__dirname + "/register.html");
    res.send('<form action="/tstform" method="post"> <input type="text" name="userName" /><br><br> <input type="submit" value="Отправить" />  </form>');
});

app.post('/tstform', urlencodedParser, function (req, res) {
    console.log(req.body.userName);
    db.print();
});




app.listen(3001, function () {
    console.log('Example app listening on port 3000!');
});