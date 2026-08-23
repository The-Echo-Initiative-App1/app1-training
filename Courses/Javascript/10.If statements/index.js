const mytext=document.getElementById("mytext");
const mysubmit=document.getElementById("mysubmit");
const resultelement=document.getElementById("resultelement");
let age;

mysubmit.onclick=function(){
    age=mytext.value;
    age=Number(age);
    if(age>=18>100){
    resultelement.textContent = `You are too old to enter this site`;
}
    else if(age==0){
    resultelement.textContent =`you can not enter.You were just born`
}
    else if(age<0){
    resultelement.textContent =`your age can not be below 0`;

}
    else if(age>=100){
    resultelement.textContent =`you are too old to enter this site`;
}
    else{
    resultelement.textContent =`you must be 18+ to enter this site`;
}
}