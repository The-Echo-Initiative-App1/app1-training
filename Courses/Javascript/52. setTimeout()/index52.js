//setTimeout(()=> window.alert("hello"), 3000)
let timeoutId;

function startTimer(){
    timeoutId=setTimeout(()=> window.alert("hello"), 3000);
}
function clearTimer(){
    clearTimeout(timeoutId);
    console.log("cleared")
}