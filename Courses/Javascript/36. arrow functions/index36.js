//const hello =(name, age)=> {console.log(`hello ${name}`)
//                        console.log("you are ${age}old")};
//hello("bro", 25);
//hello();
const numbers=[1,2,3,4,5,6];
const squares=numbers.map((element)=> Math.pow(element, 2))
const eveNums=numbers.filter((element)=> element%2 ===0);
const total = numbers.reduce((accumylator, element)=> accumylator+element)
console.log(total);