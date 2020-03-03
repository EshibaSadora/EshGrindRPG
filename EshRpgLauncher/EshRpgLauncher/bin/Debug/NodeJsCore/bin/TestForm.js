var express = require('express');
var bodyParser = require("body-parser");
var delay = require('delay');
var db = require('./db');
var app = express();

db.Init();
db.DoSql();


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