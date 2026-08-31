const people=[{name:"anna", age:30, gpa:3.0}, {name:"jessica", age:39, gpa:1.5}, {name:"alina", age:51, gpa:2.5}, {name:"ethan", age:27, gpa:4.0}]
people.sort((a,b)=> a.gpa - b.gpa);
console.log(people);