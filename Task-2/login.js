const readline=require('readline-sync');

var op = require('./DbOperation');

var email=readline.question('Enter Email :');
var password=readline.question('Enter PASSWORD :');

op.login(email , password);
