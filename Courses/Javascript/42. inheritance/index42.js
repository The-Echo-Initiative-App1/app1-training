// it allows a new class to inherit properties and methods from existing class(parent-> child)
class animal{
    alive=true;
    eat(){
        console.log(`this ${this.name} is eating`)
    }
    sleep(){
        console.log(`this ${this.name} is sleeping`)
    }
}
class rabbit extends animal{
    name="rabbit";
    run(){
        console.log(`this ${this.name} is running`)
    }
}
class fish extends animal{
    name="fish";
    swim(){
        console.log(`this ${this.name} is swimming`)
    }
}
const Rabbit= new rabbit();
const Fish= new fish()

console.log(Rabbit.alive)
Rabbit.sleep();
Rabbit.eat();
Rabbit.run()