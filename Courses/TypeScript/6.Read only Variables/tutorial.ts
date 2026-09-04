interface Employee{
     readonly employeeId:number;
     readonly startDate:Date;
   
    name:string;
    department:string;

}
const employee:Employee ={
    employeeId:123,
    startDate:new Date,
    name:"yasmine",
    department:"IT"
};
employee.name="asmaa";
console.log(employee);