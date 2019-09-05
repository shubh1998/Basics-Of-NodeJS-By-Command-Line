// function sum(a,b) //Normal Function
// {
//     return a+b;
// };
// module.exports=sum;

// module.exports= function(a,b) //Anonymous function
// {
//     return a+b;
// };

// module.exports= (a,b) => //Arrow(Fat Arrow) Function
// {
//     return a*b;
// };

module.exports={                        //Import JAVASCRIPT object
    sum:(a,b) => { return a+b; } ,
    multi:(c,d) => { return c*d; }
};