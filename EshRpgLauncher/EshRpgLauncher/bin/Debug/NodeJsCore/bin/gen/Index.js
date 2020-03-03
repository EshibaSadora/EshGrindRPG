var vars = require('../Vars');
var gamecore = require('../gamecore');

module.exports = {
    build_body : function () {

        console.log("Index");

        var fs = require('fs');
        var data = fs.readFileSync(vars.path +"/html/index.html", 'utf8');

        if(gamecore.userauth==''){
            data = data.replace('%BODY%', '<script type="text/javascript"> setTimeout(\'window.location="login"\', 0); </script>');
        }



        data = data.replace('%PROJECTNAME%',vars.projectname);
        return data;
    }
}