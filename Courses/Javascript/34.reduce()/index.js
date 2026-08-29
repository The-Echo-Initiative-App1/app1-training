const grades=[75,50,80,65];
const maximum=grades.reduce(getmax);
const minimum=grades.reduce(getmin);
function getmax(accumulator,element){
    return Math.max(accumulator,element);
}
console.log(maximum);
function getmin(accumulator,element){
    return Math.min(accumulator,element);
}
console.log(minimum);