const readline = require('readline-sync');

const OP = require('./DbOperation');

var semail= readline.question("Enter your Email : ");
var password = readline.question("Enter password : ");
var remail = readline.question("Enter Receiver Email :");
var subject = readline.question("Enter Subject : ");
var message = readline.question("Enter message : ");

OP.sendmail(semail, password, remail, subject, message);