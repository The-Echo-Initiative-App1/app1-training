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
function func1(callback){


setTimeout(() => console.log("Task 1"), 3000);
}
function fun2(){
console.log("Task 2");
console.log("Task 3");
console.log("Task 4");
}
1. document.getElementById();
2. document.getElementsByClassName();
3. document.getElementsByTagName();
4. document.querySelectorAll();

.firstElementChild
.lastElementChild
.nextElementSibling
.previousElementSibling
.parentElement
.children

const box = document.getElementById('interactive-box');
const log = document.getElementById('status-log');
const coordsText = document.getElementById('coords');


function updateLog(text) {
    log.textContent = `Last Action: ${text}`;
}

// 1. Click Events
box.addEventListener('click', () => {
    updateLog('Left Click Detected! 🖱️');
});

box.addEventListener('dblclick', () => {
    updateLog('Double Click Detected! ⚡');
});

box.addEventListener('contextmenu', (event) => {
    event.preventDefault(); 
    updateLog('Right Click Detected! 🛠️');
});


box.addEventListener('mousedown', () => {
    box.style.transform = 'scale(0.95)'; 
    updateLog('Mouse Button Pressed Down...');
});

box.addEventListener('mouseup', () => {
    box.style.transform = 'scale(1)'; 
    updateLog('Mouse Button Released!');
});


box.addEventListener('mouseenter', () => {
    updateLog('Mouse Entered the Box Boundary');
});

box.addEventListener('mouseleave', () => {
    coordsText.textContent = 'X: 0, Y: 0'; 
    updateLog('Mouse Left the Box Boundary');
});

box.addEventListener('mousemove', (event) => {

    const rect = box.getBoundingClientRect();
    const x = Math.round(event.clientX - rect.left);
    const y = Math.round(event.clientY - rect.top);
    
    coordsText.textContent = `X: ${x}, Y: ${y}`;
});

const keyDisplay = document.getElementById('key-display');
const keyDetails = document.getElementById('key-details');

const shiftBadge = document.getElementById('mod-shift');
const ctrlBadge = document.getElementById('mod-ctrl');
const altBadge = document.getElementById('mod-alt');


window.addEventListener('keydown', (event) => {
   
    const keyName = event.key === ' ' ? 'Spacebar' : event.key;
    
  
    keyDisplay.textContent = keyName;
    keyDetails.innerHTML = `Key: ${event.key} | Code: ${event.code}`;
    
   
    toggleModifiers(event);
    
    
    if (event.ctrlKey && event.key === 's') {
        event.preventDefault(); 
        keyDisplay.textContent = "Saved! 💾";
    }
});


window.addEventListener('keyup', (event) => {
   
    toggleModifiers(event);
});


function toggleModifiers(event) {
    if (event.shiftKey) shiftBadge.classList.add('active');
    else shiftBadge.classList.remove('active');

    if (event.ctrlKey) ctrlBadge.classList.add('active');
    else ctrlBadge.classList.remove('active');

    if (event.altKey) altBadge.classList.add('active');
    else altBadge.classList.remove('active');
}

const itemsList = document.querySelectorAll('.list-item');
const toggleBtn = document.getElementById('action-btn');

console.log(itemsList); 
itemsList.forEach((item, index) => {
    item.addEventListener('click', () => {
    
        item.classList.toggle('selected');
        console.log(`Clicked item index position: ${index}`);
    });
});


toggleBtn.addEventListener('click', () => {
    itemsList.forEach((item) => {
        item.classList.add('selected');
    });
});


const itemsArray = Array.from(itemsList); 

