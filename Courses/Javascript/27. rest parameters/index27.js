
function combineString(...strings){
    return strings.join(" ");
}

const fullName=combineString("mr", "spongebob", "squarepants", "III");
console.log(fullName);