const username="anna bodenchuk";
const welcomeMsg=document.getElementById("welcome-msg");
welcomeMsg.textContent+=username ===""? `guest`: username;
