let username=window.prompt("Enter your username:  ");
/*username=username.trim();
let letter=username.charAt(0);
letter=letter.toUppperCase();

let extrachars=username.slice(1);
extrachars=extrachars.toLowerCase();
username=letter+extrachars
console.log(username);*/
username=username.trim().charAt().toUpperCase()+username.trim().slice(1).toLowerCase();
console.log(username)