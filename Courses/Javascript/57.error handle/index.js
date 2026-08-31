 
 try{
const divident=Number(window.prompt("enter a divident:"));
const divisor=Number(window.prompt("enter a divisor:"));
if(divisor==0){
    throw new Error("you can not devide by 0");
}
if(isNaN(divident)){
    throw new Error("values must be a number");

}
const result=divident/divisor;
console.log(result);}
catch(error){
    console.error(error);
}
console.log(`you have reached the end`);