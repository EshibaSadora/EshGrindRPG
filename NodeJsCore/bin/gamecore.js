module.exports.userid = "";
module.exports.userauth = "";

module.exports = {
    to_user : function () {
        var out = "";
        out = out + "var core_userid = " + userid + "\n"; //Выдаём userid
        out = out + "var core_userauth = " + userauth + "\n"; //Выдаём userauth
        return out;
    }
}