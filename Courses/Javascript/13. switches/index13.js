let testscore=72;
let lettergrade;

switch(true){
    case testscore>=90:
        lettergrade="A";
        break;
    case testscore>=80:
        lettergrade="B";
        break;
    case testscore>=70:
        lettergrade="C";
        break;
    case testscore>=60:
        lettergrade="D";
        break;
    case testscore>=50:
        lettergrade="E";
        break;
    default:
        lettergrade= "F"
        
}
console.log(lettergrade)