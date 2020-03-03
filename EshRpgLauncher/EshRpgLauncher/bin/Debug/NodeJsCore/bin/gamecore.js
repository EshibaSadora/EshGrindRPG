var userid = "";
var userauth = "";


module.exports = {
    to_user : function () {
        var out = "";
        out = out + "var core_userid = " + userid + "\n"; //Выдаём userid
        out = out + "var core_userauth = " + userauth + "\n"; //Выдаём userauth
        return out;
    }
}

module.exports.userid = userid;
module.exports.userauth = userauth;
