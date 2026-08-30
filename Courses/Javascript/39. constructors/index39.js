function car(make, model, year, color){
    this.make=make,
    this.model=model,
    this.year=year,
    this.color=color,
    this.drive=function(){console.log(`you drive this ${this.model}`)}
}
const car1= new car("ford", "mustang", 2024, "red");
const car2= new car("chevrolet", "camero", 2025, "blue")
car1.drive()
