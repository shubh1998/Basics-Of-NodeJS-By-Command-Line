const con = require('./Db');

function insertData(name , email , password)
{
    var sql = "insert into user(name , email , password) values ('"+name+"','"+email+"','"+password+"')";
    con.query(sql , function(err){
        if(err)
            throw err;
        else
        {
            console.log("=================================");
            console.log("Account Created");
            console.log("=================================");
        }
    });
}

function fetchData()
{
    var sql="select * from user";
    con.query(sql , (err , result) => {
        if(err)
            throw err;
        else
            for(temp of result)
            {
                console.log("user id : "+temp.uid);
                console.log("Name : "+temp.name);
                console.log("Emailid : "+temp.email);
                console.log("Password : "+temp.password);
                console.log("****************************************************");
            }
    });
}

function loginCheck(email , password)
{
    var sql="select * from user where email='"+email+"' and password='"+password+"'";
    con.query(sql,(err,result)=>{
        if(err)
            throw err;
        if(result.length!=0)
        {
            console.log("Login Success");
        }
        else
            console.log("Login Fail");
   });
}

function InboxSendMail(semail , password, remail, subject, message){
    var sql = "insert into mail(semail , password, remail, subject, message) values ('"+semail+"','"+password+"','"+remail+"','"+subject+"','"+message+"')";
    con.query(sql , function(err){
        if(err)
            throw err;
        else
        {
            console.log("=================================");
            console.log("Mail send Successfully..");
            console.log("=================================");
        }
    });
}


function checkInbox(email, password)
{
    var sql="select * from mail where semail = '"+email+"' and password = '"+password+"'";
    con.query(sql , (err , result) => {
        if(err)
            throw err;
        else
            for(temp of result)
            {
                console.log("Sender's Emailid : "+temp.semail);
                console.log("Receiver's Emailid : "+temp.remail);
                console.log("mail ID : "+temp.mailid);
                console.log("Subject : "+temp.subject);
                console.log("Message : "+temp.message);
                console.log("Mail-Date : "+temp.maildate);
                console.log("****************************************************");
            }
    });
}

module.exports={
    insert : insertData,
    fetch : fetchData,
    login : loginCheck,
    sendmail : InboxSendMail,
    inbox : checkInbox
}