const readline = require('readline-sync');

var OP = require('./DbOperation');

var name = readline.question("Enter Your Name : ");
var emailid = readline.question("Enter Your Email-Id : ");
var password = readline.question("Enter Your Password : ");

OP.insert(name , emailid , password);
OP.fetch();