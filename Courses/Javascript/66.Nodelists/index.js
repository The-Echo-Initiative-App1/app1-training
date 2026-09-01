let buttons=document.querySelectorAll(".Mybtns");
buttons.forEach(button=>{
    button.addEventListener("click",event=>{
        event.target.remove();
        console.log(buttons);
        buttons=document.querySelectorAll(".Mybtns");
        console.log(buttons);
    })
})