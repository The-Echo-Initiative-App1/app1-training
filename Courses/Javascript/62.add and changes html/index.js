//const newh1=document.createElement("h1");
//newh1.textContent="I like pizza";
//newh1.id="myh1";
//newh1.style.color="pink";
//newh1.style.textAlign="center";
//document.body.append(newh1);
//document.body.prepend(newh1);
//document.getElementById("box1").append(newh1);
//document.getElementById("box2").prepend(newh1);
//const box2=document.getElementById("box2");
//document.body.insertBefore(newh1,box2) ;
//const boxes=document.querySelectorAll(".box");
//document.body.insertBefore(newh1,boxes[0])
//document.getElementById("box1").removeChild(newh1);



const newlistitem=document.createElement("li");
newlistitem.textContent="coconut";
newlistitem.id='coconut';
newlistitem.style.fontWeight="bold";
newlistitem.style.backgroundColor="pink";
//document.body.prepend(newlistitem);
//document.body.append(newlistitem);
document.getElementById("fruits").append(newlistitem);
//document.getElementById("fruits").prepend(newlistitem);
//const orange=document.getElementById("orange");
//const boxes=document.querySelectorAll("#fruits li");
//document.getElementById("fruits").insertBefore(newlistitem,boxes[1]);
document.getElementById("fruits").removeChild(newlistitem);
