function displayaperson({firstname,lastname,age,job="unemloyed"}){
    console.log(`name:${firstname} ${lastname}`);
    console.log(`age: ${age}`);
    console.log(`job: ${job}`)

}
const person1={
    firstname:"yasmine",
    lastname:"tag",
    age:16,
    job:"none"
}
const person2={
    firstname:"amina",
    lastname:"biy",
    age:44
}
const{firstname,lastname,age,job="unemplyed"}=person2;
console.log(firstname);
console.log(lastname);
console.log(age);
console.log(job);
displayaperson(person2);