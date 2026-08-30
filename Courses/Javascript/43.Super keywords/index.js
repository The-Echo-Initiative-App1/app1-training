class animal{
    constructor(name,age){
        this.name=name;
        this.age=age;

    }
    move(speed){
        console.log(`the ${this .name} moves at a speed of ${speed}mph`)
    }
}
class Rabbit extends animal{
    constructor(name,age,runSpeed){
        super(name,age);
        this.runSpeed=runSpeed;
        
    }
    run(){
        console.log(`this ${this.name} can run`)
        super.move(this.runSpeed)
    }

}
class Fish extends animal{
     constructor(name,age,swimSpeed){
        super(name,age);
        this.swimSpeed=swimSpeed;
        super.move(this.swimSpeed);
        
     }
    swim(){
        console.log(`this ${this.name} can swim`)
    }
    
}
class Hawk extends animal{
     constructor(name,age,flySpeed){
        super(name,age);
        this.flySpeed=flySpeed;
        super.move(this.flySpeed);
        
    }
    fly(){
        console.log(`this ${this.name} can fly`)
    }
   
}
const rabbit=new Rabbit("rabbit",1,25);
const fish=new Fish("fish",2,12);
const hawk= new Hawk("hawk",3,50);
console.log(rabbit.name);
console.log(fish.age);
console.log(hawk.flySpeed);
rabbit.run();
fish.swim();
hawk.fly();