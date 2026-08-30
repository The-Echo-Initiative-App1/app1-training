const words=["apple", "orange", "banana", "kiwi", "coconut"]
const shortwords=words.filter(getShortWords)
console.log(shortwords);
function getShortWords(element){
    return element.length<=6;
}