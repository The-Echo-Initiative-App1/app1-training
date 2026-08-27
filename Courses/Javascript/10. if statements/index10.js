//let age=13;
//if(age>=18){
//    console.log('you are old enough');
//}
//else{
    //console.log("you must be 18+ to enter this site");
//}
//let time=9;
//if(time<12){
//    console.log("good morning")
//}
//else{
//    console.log("good afternoon")
//}
//let isStudent=false;
//if(isStudent){
//    console.log("you are a student");
//}
//else{
//    console.log("you are not a student")
//}

//let haslicense=false;
//if(age>=16){
//    console.log("you are old enough to drive");
//    if(haslicense){
//        console.log("you have your license");
//    }
//    else{
//        console.log("you do not have a license");
//    }
//}
//else{
//    console.log("you must be at least 16 to have a license");
//}

const mytext=document.getElementById("mytext");
const mysubmit=document.getElementById("mysubmit");
const resultElement=document.getElementById("resultElement");
let age;
mysubmit.onclick=function(){
    age=mytext.value;
    age=Number(age);
    if(age>=100){
        resultElement.textContent=`you are too old to enter this site`;
    }
    else if(age==0){
         resultElement.textContent=`you cant enter. you were just born`;
    }
    else if (age>=18){
        resultElement.textContent=`you are old enough`;
       
    }
    else if(age<0){
        resultElement.textContent=`your age cant be below 0`;

    }

    else{
        resultElement.textContent=`you must be 18+ to enter this site`;

    }
}


