const person1={
    firstname:"yasmine",
    lastname:"taguetiout",
    age:16,
    isstudent:true,
    sayhello:function(){console.log("hii im yasmine");},
    eat:function(){console.log('iam eating shawarma');},
}
const person2={
    firstname: "alaa",
    lastname: "baci",
    age: 17,
    isstudent:true,
    sayhello:()=>console.log("hii im alaa"),
    eat:function(){console.log('iam eating pizza');},

}
person1.sayhello();
person2.sayhello();
person1.eat();
person2.eat();

