
var delay = require('delay');

var db = require('./db');
var vars = require('./Vars');
var index = require('./gen/Index');
var login = require('./gen/login');




db.Init(); //Подключение к mysql базе
vars.Init();
login.gen();

vars.app.get("/", vars.urlencodedParser, function (request, response) {
    response.send(index.build_body());
});




let testarray = new Array();

vars.app.get("/main", vars.urlencodedParser, function (request, response) {
    console.log("GET");
    response.send(genmain());
});

vars.app.post('/main', vars.urlencodedParser, function (req, res) {
    testarray.push(req.body.inp);
    console.log(testarray);
    res.redirect('/main');
});

function genmain(){
    var fs = require('fs');
    var data = fs.readFileSync(vars.path +"/html/main.html", 'utf8');
    var gen = "<ul>";
    console.log(testarray.length);
    for(var i = 0; i < testarray.length;i++){
        gen = gen + "<li>" + testarray[i]  + "</li>"
    }
    gen = gen + "</ul>";
    data = data.replace("%GENBODY%",gen + '<form action="/main" method="post"> <input type="text" name="inp" /><br><br> <input type="submit" value="Отправить" />  </form>');
    return data;
}




vars.app.listen(vars.serverport, function () {
    console.log('Example app listening on port ' + vars.serverport + '!');
});


