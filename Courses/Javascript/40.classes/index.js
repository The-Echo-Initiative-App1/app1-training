class product{
    constructor(name,price){
        this.name=name;
        this.price=price;
    }
    displayProduct(){
        console.log(`Product:${this.name}`);
        console.log(`price:${this.price.toFixed(2)}`);
    }
    calculatetotal(salesTax){
        return this.price*salesTax;
    }
}
const salesTax=0.05;
const product1=new product("shirt",19.19);
const product2=new product("chocolate",5.99);
const product3=new product("pants",20.40);
product1.displayProduct();
product2.displayProduct();
product3.displayProduct();
const total=product3.calculatetotal(salesTax);
console.log(` Toatal price (with tax)${total.toFixed(2)}`);