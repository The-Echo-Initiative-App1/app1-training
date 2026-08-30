class Person{
    constructor(name,age,...address){
        this.name=name;
        this.age=age;
        this.address=new Address(...address);

    }
}

class Address{
    constructor(street,city,country){
        this.street=street
        this.city=city
        this.country=country;
    }
}
const person1=new Person("yasmine",16,"31street","oran","Algeria");
const person2=new Person("yasmine2",19,"312street","oran","Algeria");
const person3=new Person("yasmine3",22,"313street","oran","Algeria");
console.log(person1.address.city);
console.log(person2.address.street);
console.log(person3.address.country);
