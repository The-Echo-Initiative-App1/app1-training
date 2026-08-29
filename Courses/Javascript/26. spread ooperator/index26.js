//let numbers=[1,2,3,4,5];
//let max=Math.max(...numbers);
//with ... you can get numbers from the list and then the program can work with them
//let letters=[...username].join("-");
let fruits=["apple", "orange", "banana"];
let newFruits=[...fruits];
let vegetables=["carrots", "celery", "potatos"];
let foods=[...fruits, ...vegetables, "eggs", "milk"];
console.log(foods);