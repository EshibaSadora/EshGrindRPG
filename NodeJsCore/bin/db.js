module.exports.mysql = require('mysql');
module.exports.connection;



module.exports = {

    Init: function(){
        connection = mysql.createConnection({
            host     : 'localhost',
            user     : 'root',
            password : '',
            database : 'rpggame'
        });
        connection.connect();
    },

    DoSql: function () {
        connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
            if (error) throw error;
            console.log('The solution is: ', results[0].solution);
        });
    },
};