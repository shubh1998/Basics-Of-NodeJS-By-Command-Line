var args = process.argv;

var num1 = Number(args[2]);
var num2 = Number(args[3]);
var num3 = Number(args[4]);
var operation = args[5];

if(operation == "sum")
{
    var sum=num1+num2+num3;
    console.log("Sum = "+sum);
}
else if(operation == "avg")
{
    var avg=(num1+num2+num3)/3;
    console.log("Average = "+avg); 
}
else if(operation == "max")
{
    if(num1>num2 && num1>num3)
    {
        console.log("max = " + num1);
        
    }
    else if(num2 > num3)
    {
        console.log("max = " + num2); 
    }
    else
    {
        console.log("max = " + num3);        
    }
}
else if(operation == "min")
{
    if(num1<num2 && num1<num3)
    {
        console.log("min = " + num1);
        
    }
    else if(num2 < num3)
    {
        console.log("min = " + num2); 
    }
    else
    {
        console.log("min = " + num3);        
    }
}