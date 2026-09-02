let buttons = document.querySelectorAll(".mybuttons");

buttons.forEach(button=>{
button.addEventListener("click", event=>{
    event.target.remove();
    console.log(buttons);
    buttons=document.querySelectorAll(".mybuttons");
    console.log(buttons);
})

})