const fullname="anna bodenchuk"
//let firstName=fullName.slice(0, 2);
//console.log(firstName)
//let firstname=fullName.slice(0,fullname.indexOf(" "));
//console.log(firstname);
const email="anna.bodenchuk@icloud.com";
let username=email.slice(0, email.indexOf("@"));
let extension=email.slice(email.indexOf("@")+1);
console.log(username);
console.log(extension);