//unction happybirthday(username,age){
//    console.log("happy birthday to you");
//    console.log("happy birthday to you");
//    console.log(`happy birthday dear ${username}`);
//    console.log(`you are ${age} years old`);
//}
//happybirthday("anna", 25);
function add(x,y){
    return x+y;
}
function subtract(x,y){
    return x-y;
}
function multiply(x,y){
    return x*y;
}
function divide(x,y){
    return x/y;
}
function isEven(number){
    if(number %2===0){
        return number %2===0 ? true : false;
    }
}
function isValid(email){

    return email.includes("@") ? true : false
}
console.log(isValid("anna.bodenchuk@gmail.com"));
console.log(isValid("elonmusk.com"));
console.log(isValid("zuckerberg@meta.com"));
