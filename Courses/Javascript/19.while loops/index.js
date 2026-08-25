let loggedIn=true;
let username;
let password;
while(!loggedIn){
     username=window.prompt(`Enter your username`);
     password=window.prompt(`Enter your password`);
     if(username==="myUsername" && password==="myPassword"){
        loggedIn=true;
        console.log(`you are logged in`)
     }
     else(
         console.log(`Invalid credentials Please try again!`)
     )
}