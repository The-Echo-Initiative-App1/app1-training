function generatePassword(length,includeLowerCase, includeUpperCase, includeNumbers,includeSymbols ){
    const lowecasechars="qwertyuiopasdfghjklzxcvbnm";
    const uppercasechars="qQWERTYUIOPASDFGHJKLZXCVBNM";
    const numberchars="123456789";
    const symbolcharts="!@#*();:=+-_";
    let allowedChars='';
    let password="";
    allowedChars+=includeLowerCase ? lowecasechars : "";
    allowedChars+=includeUpperCase ? uppercasechars : "";
    allowedChars+=includeNumbers ? numberchars : "";
    allowedChars+=includeSymbols ? symbolcharts : "";
    if(length<=0){
        return `(password length must be at least 1)`;
    }
    if(allowedChars.length===0){
        return`(at least one of the character needs to be selected)`
    }
    for(let i=0; i< length; i++){
        const randomindex=Math.floor(Math.random()* allowedChars.length);
        password+=allowedChars[randomindex];
    }
    return password;
}


const passwordLength=12;
const includeLowerCase=true;
const includeUpperCase=true;
const includeNumbers=true;
const includeSymbols=true;
const password=generatePassword(passwordLength, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols);
console.log(`generated password: ${password}`);