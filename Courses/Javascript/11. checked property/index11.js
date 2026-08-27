const myCheckBox=document.getElementById("myCheckBox");
const visaBtn=document.getElementById("visaBtn");
const mastercardBtn=document.getElementById("mastercardBtn");
const payPalBtn=document.getElementById("payPalBtn");
const mysubmit=document.getElementById("mysubmit");
const subresult=document.getElementById("subresult");
const paymentresult=document.getElementById("paymentresult");

mysubmit.onclick=function(){
    if(myCheckBox.checked){
        subresult.textContent=`you are subscribed`;
    }
    else{
        subresult.textContent=`you are not subscribed`;
    }
    if(visaBtn.checked){
        paymentresult.textContent=`you are paying with visa`
    }
    else if(mastercardBtn.checked){
        paymentresult.textContent=`you are paying with mastercard`
    }
    else if(payPalBtn.checked){
        paymentresult.textContent=`you are paying with paypal`
    }
    else{
        paymentresult.textContent=`you must select a payment type`
    }
}
