const slides=document.querySelectorAll(".slides img");
let slideIndex=0;
let intervalId=null;
document.addEventListener("DOMContentLoaded",initializeslider);
function initializeslider(){
    if(slides.length>0){
    slides[slideIndex].classList.add("displayslide");
    intervalId=setInterval(nextslide,5000);}
   
}
function showslide(index){
    if(slideIndex>=slides.length){
        slideIndex=0;

    }
    else if(index<0){
        slideIndex=slides.length-1

    }
    slides.forEach(slide=>{
        slide.classList.remove("displayslide");
        slides[slideIndex].classList.add("displayslide");
    })

}
function prevslide(){
    clearInterval(intervalId);
    slideIndex--;
    showslide(slideIndex);

}
function nextslide(){
    slideIndex++;
    showslide(slideIndex);

}
