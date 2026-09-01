const btn=document.getElementById("mybtn");
const myimg=document.getElementById("myimg");
btn.addEventListener("click",event=>{
    if(myimg.style.visibility==="hidden"){
        myimg.style.visibility="visible";
        btn.textContent="Hide"
    }
    else{
    myimg.style.visibility="hidden";
    btn.textContent="Show";
    }
});