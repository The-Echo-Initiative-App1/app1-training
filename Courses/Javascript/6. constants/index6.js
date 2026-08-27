const PI =3.14159;
let radius;
let circumference;
//radius=window.prompt('enter the radius of a circle');


document.getElementById("mysubmit").onclick=function(){
    radius=document.getElementById("mytext").value;
    radius=Number(radius);
    circumference=2*PI*radius;
    document.getElementById("myh3").textContent=circumference + "cm";
}
