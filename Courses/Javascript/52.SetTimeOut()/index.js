let timeoutid;
function startTimer(){
   timeoutid = setTimeout(()=>window.alert("hi"),2000);
   console.log("starter");
}
function clearTimer(){
    clearTimeout(timeoutid);
    console.log("cleared");
}

