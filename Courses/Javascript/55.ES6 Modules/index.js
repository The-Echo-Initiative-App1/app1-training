import{PI,getcirrcumference,getarea,getavolum}from'./MathUtil.js';
console.log(PI);
const circum=getcirrcumference(10);
const area=getarea(10);
const volum=getavolum(10);
console.log(`${circum.toFixed(2)}cm`);
console.log(`${area.toFixed(2)} cm^2`);
console.log(`${volum.toFixed(2)}cm^3`);