function geneartePassword(lenght,includeLowercase,includeUppercase,includeNumbers,includeSymbols){
    const lowercasechars="abcdefghijklmnoppqrstuvwxyz";
    const uppercasechars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars="0123456789";
    const symbolChars="@#!$%^&*()_+-=/.,"
    let allowchars="";
    let password="";
    allowchars+=includeLowercase?lowercasechars:'';
    allowchars+=includeUppercase?uppercasechars:'';
    allowchars+=includeNumbers?numberChars:'';
    allowchars+=includeSymbols?symbolChars:'';
    if(lenght<=0){
        return`Password lenght must be at least one`
    }
    if(allowchars.length===0){
        return`At least one of set of characters needs to be selected`;
    }
    for(let i=0;i<lenght;i++){
        const randomindex=Math.floor(Math.random()*allowchars.length);
        password+=allowchars[randomindex];
    }
    return password;
}

const passwordLength=12;
const includeLowercase=true;
const includeUppercase=true;
const includeNumbers=true;
const includeSymbols=true;
const password=geneartePassword(passwordLength,includeLowercase,includeUppercase,includeNumbers,includeSymbols);
console.log(`generated password: ${password}`);