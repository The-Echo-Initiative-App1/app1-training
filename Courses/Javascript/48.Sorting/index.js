const people=[{name:"yasmine",age:16,gpa:4.0},
              {name:"yasmine2",age:14,gpa:3.0},
              {name:"yasmine3",age:17,gpa:2.0},
              {name:"yasmine4",age:26,gpa:3.7}]
people.sort((a,b)=>a.name.localeCompare(b.name));
console.log(people);