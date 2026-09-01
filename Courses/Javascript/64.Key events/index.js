const mybox=document.getElementById("mybox");
const moveamount=100;
let x=0;
let y=0;
document.addEventListener("keydown",event=>{
   mybox.textContent="wahh";
   mybox.style.backgroundColor="pink";

})
document.addEventListener("keyup",event=>{
   mybox.textContent="smile.";
   mybox.style.backgroundColor="lightblue";

})



document.addEventListener("keydown",event=>{
    if(event.key.startsWith("Arrow")){
       event.preventDefault();
       
        switch(event.key){
            case "ArrowUp":
                y-=moveamount;
                break;
            case "ArrowDown":
                y+=moveamount;
                break;
            case "ArrowLeft":
                x-=moveamount;
                break;
             case "ArrowRight":
                x+=moveamount;
                break;


        }
        mybox.style.top=`${y}px`
        mybox.style.left=`${x}px`
       

    }
})