const readline = require('readline-sync');

const OP = require('./DbOperation');

var name= readline.question("Enter your name : ");
var email = readline.question("Enter your Email :");
var password = readline.question("Enter Password : ");

OP.insert(name, email, password);
OP.fetch();