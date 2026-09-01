//try{
//    console.log(x);
    //network errors
    //promise rejection
    //security errors
//}
//catch(error){
//    console.log(error)
//}
//finally{
//    console.log("this always executes")
    //close files
    //close connections
    //release resources
//}
//console.log("you have reached the end");
try{
    const dividend=Number(window.prompt("enter a dividend"));
    const divisor=Number(window.prompt("enter a divisor"));
    if(divisor==0){
        throw new Error("you cant divide by zero")
    }
    if(isNaN(dividend) || isNaN(divisor)){
        throw new Error("values must be numbers");
    }
    const result =dividend/divisor
    console.log(result)
}
catch(error){
    console.error(error)
}
console.log("you have reached the end")