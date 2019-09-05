const mysql = require('mysql');

const con = mysql.createConnection({
    host : 'localhost',
    port : '3306',
    user : 'root',
    password : 'root',
    database: 'assignment1'
});

con.connect(function(err){
    if(err)
        throw err;
    else
        console.log("Database Connected Successfully");
});
 
module.exports = con;