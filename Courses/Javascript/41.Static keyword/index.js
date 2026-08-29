class user{
    static usercount=0;
    constructor(username){
        this.username=username;
        user.usercount++;
    }
    static getUsercount(){
        console.log(`thre are ${user.usercount} users online`)
    }
    sayHello(){
        console.log(`Hello,my username is ${this.username}`)
    }
}
const user1=new user("yasmine");
const user2=new user("amina");
const user3=new user("alaa");

user1.sayHello();
user2.sayHello();
user3.sayHello();
user.getUsercount();
