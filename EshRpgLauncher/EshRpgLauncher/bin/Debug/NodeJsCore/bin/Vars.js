var express = require('express');

var path = "E:/GitHub/EshGrindRPG/NodeJsCore";
var app = express();

var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({extended: false});

var sha1 = require('js-sha1');

var serverport = 80;
var projectname = "RpgGame";

module.exports = {
    Init: function () {
        app.get('/bootstrap.min.css', function(req, res) {
            res.sendFile(path  + "/lib/dist/css/bootstrap.min.css");
        });
        app.get('/jquery-3.4.1.min.js', function(req, res) {
            res.sendFile(path  + "/lib/dist/js/jquery-3.4.1.min.js");
        });
        app.get('/bootstrap.min.js', function(req, res) {
            res.sendFile(path  + "/lib/dist/js/bootstrap.min.js");
        });
    }
};

module.exports.path = path;
module.exports.app = app;
module.exports.serverport = serverport;
module.exports.projectname = projectname;
module.exports.bodyParser = bodyParser;
module.exports.urlencodedParser = urlencodedParser;
module.exports.sha1=sha1;