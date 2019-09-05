const con = require('./Db');

function insertData(name , emailid , password)
{
    var sql = "insert into account (name , emailid , password) values ('"+name+"' , '"+emailid+"', '"+password+"')";
    con.query(sql, function(err){
        if(err)
            throw err;
        else
        {
            console.log("======================================================");
            console.log("Account Created");
            console.log("======================================================");
        }
    });
};

function fetchData(){
    var sql = "select * from account";

    con.query(sql , (err , result) => {
        if(err)
            throw err;
        else
            for(temp of result)
            {
                console.log("Account id : "+temp.aid);
                console.log("Account Holder Name : "+temp.name);
                console.log("Account Holder Emailid : "+temp.emailid);
                console.log("Account Holder Password : "+temp.password);
                console.log("Accouunt Creation Date : "+temp.creationdate);
                console.log("****************************************************");
            }
    });
}


const mysql = require('mysql');
function loginCheck(aid , password)
{
    // var sql="select * from account where aid='"+aid+"' and password='"+password+"'";
    // var sql="select * from account where aid='1' and password='1' or '1' = '1'";
    
    var sql="select * from account where aid = ? and password = ?";
    var values = [aid , password];
    var sql = mysql.format(sql,values);
    con.query(sql,(err,result)=>{
        if(err)
            throw err;
        if(result.length!=0)
            console.log("Login Success");
        else
            console.log("Login Fail");
   });
}

module.exports={insert : insertData,
                fetch : fetchData,
                login : loginCheck};