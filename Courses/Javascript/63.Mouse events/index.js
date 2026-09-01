const mybox=document.getElementById("mybox");
const button=document.getElementById("mybtn");

button.addEventListener("click",function(event){
    mybox.style.backgroundColor="blue";
    mybox.textContent="ohh";

});
button.addEventListener("mouseover",event=>
{
mybox.style.backgroundColor="yellow";
mybox.textContent="dont do it";
 
}
)
button.addEventListener("mouseout",event=>
{
mybox.style.backgroundColor="green";
mybox.textContent="click again";
 
}
)


// event.target.style.backgroundColor="blue";
//event.target.textContent="ohh";
