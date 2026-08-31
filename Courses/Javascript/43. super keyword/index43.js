class animal{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    move(speed){
        console.log(`the ${this.name} moves at a speed of ${speed}`)
    }
}
class rabbit extends animal{
    constructor(name,age,runSpeed){
        super(name,age);
        this.runSpeed= runSpeed;
    }
    run(){
        console.log(`this ${this.name} can run`);
        super.move(this.runSpeed)
    }
}
class fish extends animal{
    
    constructor(name,age,swimSpeed){
        super(name,age);
        this.swimSpeed= swimSpeed;
    }
    swim(){
        console.log(`this ${this.name} can swim`);
        super.move(this.swimSpeed);
    }
}
const Rabbit=new rabbit("rabbit", 1,25)
const Fish=new fish("fish", 1,12)
console.log(Rabbit.name);
console.log(Rabbit.age);
console.log(Rabbit.runSpeed);
Rabbit.run()
