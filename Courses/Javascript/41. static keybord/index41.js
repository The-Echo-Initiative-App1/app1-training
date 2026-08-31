//class owns anything static, not the objects
class user{
    static userCount=0;

    constructor(username){
        this.username=username;
        user.userCount++;
    }
    static getUserCount(){
        console.log(`there are ${user.userCount} users online`)
    }
    sayHello(){
        console.log(`hello my username is ${this.username}`)
    }
}
const user1 = new user("spongeBob");
const user2 = new user("patrick");

user1.sayHello();
user2.sayHello();
user.getUserCount()