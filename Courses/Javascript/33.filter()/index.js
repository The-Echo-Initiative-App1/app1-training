const words=['apple','orange','banana','coconut','kiwi','strawberry'];
const shortwords=words.filter(getShortwords);
console.log(shortwords);
const longwords=words.filter(getlongwords);
console.log(longwords);
function getShortwords(element){
    return element.length <=6;
}
function getlongwords(element){
    return element.length >6;
}