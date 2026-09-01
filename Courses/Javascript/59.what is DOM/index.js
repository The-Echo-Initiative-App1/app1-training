
const username="yasmine";
const welcomemsg=document.getElementById("welcome_mesg");
welcomemsg.textContent+=username===""?`Guest`: username;
