//do{
//    username=window.prompt("enter your name");
//}
//while(username==="" || username==null){
//    username=window.prompt(`enter your name`);
//}
let username;
let password;
let LoggedIn=true;
do{
    username=window.prompt(`enter your username`);
    password=window.prompt(`enter your password`);
    if(username==="myusername" && password==="myPassword"){
        LoggedIn=true;
        console.log("you are logged in")
    }
    else{
        console.log("invalid credentials try again")
    }

}while(!LoggedIn)
