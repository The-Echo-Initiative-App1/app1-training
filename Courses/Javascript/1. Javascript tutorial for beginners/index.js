let username = "";
if(username === ""){
    console.log('You didnt enter your name');
}
else{
    console.log('Hello ${username}');
}
for(let i = 0; i <= 2 i+= 2){
    console.log("Hello");
    console.log("i");
}
const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum +1));
console.log(answer);

let attempts = 0;
let guess;
let running= true;

while(running){
    guess = window.prompt('Guess a number between ${minNum} - ${maxNum}');
    console.log(typeof guess, guess);
    guess = Number(guess);
    running = false;
}

function happybirthday(){
    console.log("Happy Birthday to you!")
    console.log("Happy Birthday to you!")
    console.log("Happy Birthday dear ${username}!")
    console.log("You are ${age} years old!")
}
happybirthday();
happybirthday();
happybirthday();
happybirthday();


function function1(){
    let x = 24;
    console.log(x);
}
function function2(){
    let x =12;
    console.log(x);
}
let fruits = ["apple", "orange", "banana"];
fruits[0] = "coconut";
console.log(fruits[0]);
console.log(fruits[1);
console.log(fruits[2]);

let number = [1, 2, 3, 4, 5];
let maximum = Math.max(...number);
let minimum = Math.min(...number);
console.log(maximum);

function openFridge(...foods){
    console.log(...foods);
}
const food1 = "pizza";
 const food2 = "Burgers";
 const food3 = "Sushi";
 const food4 = "Hotdog";

 openFridge(food1, food2, food3, food4);
 hello(goodbye);

 function hello(callback){
    console.log("Hello!");
    callback(wait);
 }
 function goodbye(){
    console.log("Goodbye!");
 }
 let numbers = [1, 2, 3, 4, 5];
 numbers.forEach(display);
 numbers.forEach(double);
 function double(element, index, array){
    array[index] = elemnt * 2;
 }
 function display(elemment){
    console.log(element);
 }
 const numbers = [1, 2, 3, 4, 5];
 const squares = numbers.map(sqaure);
 function square(element){
    return Math.pow(element, 2)
 }
let numbers = [1, 2, 3, 4, 5, 6, 7,]
let evenNums = numbers.filter(isEven);
function isEven(element){
    return element %2 === 0;
}
function hello(){
    console.log( "Hello");
}
const hello = function(){
    console.log("Hello");
}
setTimeout(function(){
console.log("Hello");
}
const person = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    isEmployed: true,
    sayHello: function(){console.log("Hi! Iam Spongebob!")},
    sayBye: function(){console.log("Goodbye!")}
};

    const person2 = {
        firstName: "Patrick",
        lastName: "Star",
        age: 42,
        isEmployed: false,
        sayHello: () => console.log("Hey, I'm Patrick"),
        sayBye: function(){console.log("Bye...")}
    };
    function sayHello(){
        window.alert("Hello");
    }
    setTimeout(sayHello, 3000);
