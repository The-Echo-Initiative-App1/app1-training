const numbers=[1,2,3,4,5,6];
const squares=numbers.map(function (element){
    return Math.pow(element,2);
});
const cubes=numbers.map(function (element){
    return Math.pow(element,3);
});
const evenNumbers= numbers.filter(function(element){
    return element%2===0;
})
const oddNumbers= numbers.filter(function(element){
    return element%2!==0;
})
const total=numbers.reduce(function(acc,ele){
    return acc+ele;
})
console.log(total);