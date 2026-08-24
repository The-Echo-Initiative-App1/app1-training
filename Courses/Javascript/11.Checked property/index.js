const mycheckbox=document.getElementById("mycheckbox");
const visaBtn=document.getElementById("visaBtn");
const mastercard=document.getElementById("mastercard");
const paypalBtn=document.getElementById("payPalBtn");
const mysubmit=document.getElementById("mysubmit");
const subresult=document.getElementById("subresult");
const paymentresult=document.getElementById("paymentresult");

mysubmit.onclick=function(){
    if(mycheckbox.checked){
        subresult.textContent=`You are subscribed`;
    }
    else{subresult.textContent=`You are not subscribed!`;}
    
    if(visaBtn.checked){
      paymentresult.textContent=`You are paying with visa`;
    }
    else if(mastercard.checked){
       paymentresult.textContent=`You are paying with mastercard`;
    }
    else if(paypalBtn.checked){
        paymentresult.textContent=`You are paying with payPal`;
    }
    else{
        paymentresult.textContent=`You must select a payment type`;
    }
}
