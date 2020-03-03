var vars = require('../Vars');
var gamecore = require('../gamecore');

module.exports = {
    gen: function(){
        vars.app.get("/login", vars.urlencodedParser, function (request, response) {
            response.sendFile( vars.path + "/html/login.html");
        });
        vars.app.post('/login', vars.urlencodedParser, function (req, res) {
            console.log(vars.sha1(req.body.inputPassword));
            gamecore.userauth=vars.sha1(req.body.inputPassword);
            res.redirect('/');
        });
    },

    build: function () {

    }
};