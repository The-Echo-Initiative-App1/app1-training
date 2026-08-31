class Person{
    constructor(firstName, lastName, age){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
    }
    set firstName(newFirstName){
        if(typeof newFirstName=== "string"&& newFirstName.length>0){
        this._firstName= newFirstName;
        }
        else{
            console.error("first name must be non empty string");
        }
    }
    set lastName(newLastName){
        if(typeof newLastName=== "string"&& newLastName.length>0){
        this._lastName= newLastName;
        }
        else{
            console.error("last name must be non empty string");
        }
    
    }
    set age(newAge){
            if(typeof newAge==="number" && newAge>=0){
                this._age=newAge;    
            }
            else{
                console.error("age must be a non negative number");
            } 
    }
    get firstName(){
        return this._firstName;
    }
    get lastName(){
        return this._lastName
    }
    get fullName(){
        return this._firstName +" " + this._lastName
    }
    get age(){
        return this._age;
    }
}
const person = new Person("pspongebob", "squarepants", 12)
console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName);
console.log(person.age);