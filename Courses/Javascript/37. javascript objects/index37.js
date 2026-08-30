const person={
    firstName:"spongebob",
    lastName:"squarepants",
    age:30,
    isEmployed:true,
    sayHello: function(){console.log("hi im spongrbob")},
    eat: ()=> {console.log("i am eatinga krabby patty")}
}
const person2={
    firstName:"patrick",
    lastName:"star",
    age:42,
    isEmployed:false, 
    sayHello: ()=>{console.log("hi im patrick")}, 
    eat: ()=> {console.log("i am eatinga pizza")}  
}
person.eat();
person2.eat();
