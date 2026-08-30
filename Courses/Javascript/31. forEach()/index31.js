//array.forEach(callback/function)
let fruits=["apple", "orange", "banana"]
fruits.forEach(capitalize);
fruits.forEach(display); // first we are saying what array the program needs to use, 
// then forEach and in brackets we write a function that we use
function upperCase(element, index, array){
    array[index]=element.toUpperCase();
}
function capitalize(element, index,array){
    array[index]=element.charAt(0).toUpperCase()+element.slice(1);
//fist take the first character of the word and make it upper case then add the element but only after index 1
}
function display(element){
    console.log(element);
}
