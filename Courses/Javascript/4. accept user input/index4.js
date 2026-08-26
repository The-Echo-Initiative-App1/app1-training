//let username;
//username=window.prompt("whats your username");
//console.log(username);
let username;
//document.getElementById("mysubmit").onclick=function(){
//    username=document.getElementById("mytext").value;
//    console.log(username);
//}
document.getElementById("mysubmit").onclick=function(){
    username=document.getElementById("mytext").value;
    document.getElementById("myh1").textContent=`hello ${username}`;
}