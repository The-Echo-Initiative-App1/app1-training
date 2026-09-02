
const mybutton=document.getElementById("mybutton")
const myimg=document.getElementById("myimg")
mybutton.addEventListener("click", event =>{
    if(myimg.style.visibility=="hidden"){
        myimg.style.visibility="visible"
        mybutton.textContent="hide";
    }
    else{
        myimg.style.visibility="hidden";
        mybutton.textContent="show";
    }
})