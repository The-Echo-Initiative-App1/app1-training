class Person{
    constructor(name, age, ...address){
        this.name=name;
        this.age=age;
        this.address= new Address(...address);
    }
}


class Address{
    constructor(street, city, country){
        this.street=street;
        this.city=city;
        this.country=country;
    }
}
const person1= new Person("anna", 30, "124 conch st.", "berlin", "germany");
const person2= new Person("alice", 37, "128 conch st.", "berlin", "germany");
const person3= new Person("jack", 45, "126 conch st.", "berlin", "germany");
console.log(person1.age);
