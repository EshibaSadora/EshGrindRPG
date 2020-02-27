var express = require('express');
var bodyParser = require("body-parser");
const delay = require('delay');
//const db = require('./db');

var app = express();


var  mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'eshiba ',
    password : 'eshiba',
    database : 'rpggame'
});
connection.connect();

connection.on('error', function(err) {
    console.log("[mysql error]",err);
});

var urlencodedParser = bodyParser.urlencoded({extended: false});

app.get('/tstform', urlencodedParser, function (req, res) {
    //response.sendFile(__dirname + "/register.html");
    res.send('<form action="/tstform" method="post"> <input type="text" name="userName" /><br><br> <input type="submit" value="Отправить" />  </form>');
});

app.post('/tstform', urlencodedParser, function (req, res) {
    //console.log(req.body.userName);
    //db.print();

});




app.listen(3001, function () {
    console.log('Example app listening on port 3000!');
});