// to swap 2 elements in an array, to cswap the value of 2 variables, assign array elements to variables, extranct values from objects, destructure in function parametrs
//[a, b]=[b,a]
function displayPerson({firstName, lastName, age, job="unemployed"}){
    console.log(`name ${firstName} ${lastName}`)
    console.log(`age: ${age}`);
    console.log(`job: ${job}`);

}
const person1 = {
firstName: "Spongebob",
lastName: "SquarePants",
age: 30,
job: "Fry Cook",
}

const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 34,
}
const {firstName, lastName, age, job="Unemployed"} = person2
console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);
