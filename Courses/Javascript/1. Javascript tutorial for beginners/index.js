let username;
document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").ariaValueMax;
    document.getElementById("myH1").textContent = Hello $("username")
}

let age = window.prompt("How old are you?");
age+=1;
age= Number(age);
console.log(age, typeof age);

let pi = 3.14159
let radius;
let circumference;

raidius = window.prompt('Enter the radius of a circle');
radius = Number(radius);

circumference = 2 * pi * radius;
console.log(circumference);