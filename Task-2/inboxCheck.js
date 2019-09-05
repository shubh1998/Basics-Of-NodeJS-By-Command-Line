const readline = require('readline-sync');

const OP = require('./DbOperation');

var email= readline.question("Enter your Email : ");
var password = readline.question("Enter password : ");

OP.inbox(email, password);