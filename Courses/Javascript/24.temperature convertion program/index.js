const textBox=document.getElementById("textBox");
const toFahrenheit=document.getElementById("toFahrenheit");
const tocelsius=document.getElementById("tocelsius");
const result=document.getElementById("result");
let temp;


function convert(){
    if(toFahrenheit.checked){
         temp=Number(textBox.value);
         temp=temp*9/5+32;
         result.textContent=temp.toFixed(1) + " fehrenheit";
    }
    else if(tocelsius.checked){
         temp=Number(textBox.value);
         temp=(temp-32*5/9);
         result.textContent=temp.toFixed(1) + " celsius";
    }
    else{
        result.textContent="select a unit";
    }

}