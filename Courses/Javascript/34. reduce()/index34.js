const grades=[75,50,90,80,65,95]
const max=grades.reduce(getMax);
console.log(max);
//function sum(accumulator, element){//(previous element, next element)
//    return accumulator+element;
//}
function getMax(accumulator, element){
    return Math.max(accumulator,element);
}