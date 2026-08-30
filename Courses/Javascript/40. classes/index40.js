class product{
    constructor(name, price){
        this.name=name;
        this.price=price;

    }
    displayProduct(){
        console.log(`product: ${this.name}`)
        console.log(`price: $${this.price.toFixed(2)}`)
    }
    calculateTotal(salesTax){
        return this.price +(this.price * salesTax);
    }
}
const salesTax=0.05;

const product1=new product("shirt", 19.99);
const product2=new product("spants", 22.50);
const product3=new product("underwear", 100);

product3.displayProduct();
const total =product1.calculateTotal(salesTax);
console.log(`total price with tax: $${total.toFixed(2)}`)