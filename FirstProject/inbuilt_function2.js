//code to read from a file

var fs=require('fs');
fs.readFile('hello.txt' , 'utf8' , function(err , data){
    if(err) throw err;
    else
        console.log(data);
        
});