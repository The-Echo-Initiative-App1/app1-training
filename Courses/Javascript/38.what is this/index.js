const person1={
    name:"yasmine",
    food:"shawarma",
    sayhello:function(){console.log(`hi iam ${this.name}`)},
    eat:function(){console.log(`${this.name} is eating ${this.food}`)}
}
const person2={
    name:"amina",
    food:"gratin",
    sayhello:function(){console.log(`hi iam ${this.name}`)},
    eat:function(){console.log(`${this.name} is eating ${this.food}`)}
}
person1.sayhello();
person1.eat()
person2.eat();