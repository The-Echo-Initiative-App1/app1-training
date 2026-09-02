const box=document.getElementById("box");
const mybutton=document.getElementById("mybutton");

mybutton.addEventListener("click", event =>{
    box.target.style.backgroundColor="red";
    box.target.textContent="ouch";
} )
mybutton.addEventListener("mouseover", event => {
    box.target.style.backgroundColor="yellow";
    box.target.textContent="dont do it";
})
mybutton.addEventListener("mouseout", event => {
    box.target.style.backgroundColor="greeen";
    box.target.textContent="click me";
})
