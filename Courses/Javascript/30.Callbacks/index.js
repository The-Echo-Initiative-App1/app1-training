function sum(callback,x,y){
    let result=x+y;
    callback(result);

}
function displayResult(result){
    console.log(result);

}
sum(displayPage,21,34)
function displayPage(result){
    document.getElementById("myh1").textContent=result;

}