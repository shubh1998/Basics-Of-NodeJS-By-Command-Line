//code to write in a file

var fs = require('fs');
fs.writeFile('hello.txt' , 'Hello Node JS its me shubham' , function(err){
    if(err) throw err;
    console.log("Data Written Successfully");
    
});