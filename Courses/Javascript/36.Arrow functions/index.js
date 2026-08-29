

const numbers=[1,2,3,4,5,6]
const cubes=numbers.map(((element) =>Math.pow(element,3)));
const squares=numbers.map(((element) =>Math.pow(element,2)));
const evenNumbers=numbers.filter((element)  => element%2===0);
const oddNumbers=numbers.filter((element)  => element%2!==0);
const total=numbers.reduce((accumulator,element) => accumulator+element)
console.log(total);
