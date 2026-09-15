const decreasebtn = document.getElementById("decreasebtn");
const resetbtn = document.getElementById("resetbtn");
const increasebtn = document.getElementById("increasebtn");
const countLabel = document.getElementById("countLabel");
let count = 0;
increasebtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}
decreasebtn.onclick = function(){
    count--;
    countLabel.textContent = count;
}
resetbtnbtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}

Math.PI
console.log(Math.PI);
console.log(E);
let x = 3.21;
let z;
const min = 50;
const max = 100;
let random = Math.floor(Math.random() * 6) + 1;
console.log(randomNum);

let age = 25;
if(age >=18){
    console.log("You are old enough to enter this site");
}
else{
    console.log("You must be 18+ to enter this site");
}
let isStudent = false;
if(isStudent){
    console.log("You are a student!");
}
else{
    console.log("You are NOT a student");
}
let age = 23;
let message = age>= ? "You are an adult" : "You are a minor";
console.log(message);

let time = 16;
let greeting = time < 12 ? "Good Morning!": "Good Afternoon!";
console.log(greeting);

let username = window.prompt("Enter your username");
username = username.trim():
let letter = username.charAt(0);
letter = letter.toUpperCase();
let extraChars = username.slice(1);
extraChars = extraChars.toLowerCase();
username = letter + extraChars;

console.log(username);
const temp = 20;
if(temp > 0){
    console.log("Thea weather is GREAT");
}
else if(temp <=30){
    console.log("The weather is GOOD");
}
else(
    console.log("The weather is BAD");
)