class Person{
    constructor(firstname,lastname,age){
        this.firstname=firstname;
        this.lastname=lastname;
        this.age=age;

    }
    set firstname(newfirstname){
        if(typeof newfirstname==="string"&& newfirstname.length>0){
            this._firstname=newfirstname;
        }
        else{
            console.error("first name must a non -emty string");
        }
        
    }
    set lastname(newlastname){
        if(typeof newlastname==="string"&& newlastname.length>0){
            this._lastname=newlastname;
        }
        else{
            console.error("last name must a non -emty string");
        }}
    set age(newage){
        if( typeof newage ==="number" && newage>0){
            this._age=newage;
        }
        else{
            console.error("age must be a non-negative number")
        }

    }
    get firstname(){
        return this._firstname;
    }
    get lastname(){
        return this._lastname;
    }
    get fullname(){
        return this._firstname +" "+ this._lastname;
    }
    get age(){
        return this._age;
    }
}
const person=new Person("yasmine","taguetiout",16);
console.log(person.firstname);
console.log(person.lastname);
console.log(person.fullname);
console.log(person.age);