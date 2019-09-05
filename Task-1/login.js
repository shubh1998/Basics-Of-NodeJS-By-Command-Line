const readline=require('readline-sync');

var op = require('./DbOperation');

var aid=readline.question('Enter Account ID:');
var password=readline.question('Enter PASSWORD:');

op.login(aid , password);
