var express = require('express');
var bodyParser = require("body-parser");
const delay = require('delay');
sha1 = require('js-sha1');
const db = require('./db');

var serverport = 3000;

var __dirname = "E:/GitHub/EshGrindRPG/NodeJsCore";

var app = express();


var urlencodedParser = bodyParser.urlencoded({extended: false});

//db.Init(); //Подключение к mysql базе

app.get('/bootstrap.min.css', function(req, res) {
    res.sendFile(__dirname  + "/lib/dist/css/bootstrap.min.css");
});



app.get("/login", urlencodedParser, function (request, response) {
    response.sendFile( __dirname + "/html/login.html");
});

app.get("/tvitter", urlencodedParser, function (request, response) {
    response.sendFile( __dirname + "/examples/bootstrap_twitter_main.html");
});

app.get("/main2", urlencodedParser, function (request, response) {
    response.sendFile( __dirname + "/html/main2.html");
});

let testarray = new Array();

app.get("/main", urlencodedParser, function (request, response) {
    console.log("GET");
    response.send(genmain());
});

app.post('/main', urlencodedParser, function (req, res) {
    testarray.push(req.body.inp);
    console.log(testarray);
    res.redirect('/main');
});

function genmain(){
    var fs = require('fs');
    var data = fs.readFileSync(__dirname +"/html/main.html", 'utf8');
    var gen = "<ul>";
    console.log(testarray.length);
    for(var i = 0; i < testarray.length;i++){
        gen = gen + "<li>" + testarray[i]  + "</li>"
    }
    gen = gen + "</ul>";
    data = data.replace("%GENBODY%",gen + '<form action="/main" method="post"> <input type="text" name="inp" /><br><br> <input type="submit" value="Отправить" />  </form>');
    return data;
}

app.post('/login', urlencodedParser, function (req, res) {



    console.log(res);
    //console.log(sha1(req.body.inputPassword));
   // res.redirect('/test');
    //res.send('<link href="bootstrap.min.css" rel="stylesheet"><form action="/tstform" method="post"> <input type="text" name="userName" /><br><br> <input type="submit" value="Отправить" />  </form>');
});


app.listen(serverport, function () {
    console.log('Example app listening on port ' + serverport + '!');
});


