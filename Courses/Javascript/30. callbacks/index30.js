//are needed for when we want to be certain that the first function will be done and only after js starts to do the second function
//(because some functions can take longer so js execute the second one and doesnt wait and we want to avoid that)
sum(displayPage, 1, 2)
function sum(callback, x, y){
    let result =x+y;
    callback(result);
}
function displayConsole(result){
    console.log(result);
}
function displayPage(result){
    document.getElementById("myh1").textContent=result
}