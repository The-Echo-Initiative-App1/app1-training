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
    callback();
 }
 function goodbye(){
    console.log("Goodbye!");
 }