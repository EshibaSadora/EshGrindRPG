module.exports.mysql = require('mysql');
module.exports.connection;



module.exports = {

    Init: function(){
         mysql = require('mysql');
         connection = mysql.createConnection({
            host     : 'localhost',
            user     : 'eshiba',
            password : 'eshiba',
            database : 'rpggame',
            port: 3306
        });
        connection.connect();
        connection.on('error', function(err) {
            console.log("[mysql error]",err);
        });
        console.log("Connected to mysql!");
    },

    DoSql: function () {
        connection.query('SELECT * FROM TEST', function (err, result, fields) {
            if (err) throw err;
            console.log(result);
        });
    },
};