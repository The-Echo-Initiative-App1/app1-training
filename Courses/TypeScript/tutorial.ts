interface Employee{
    readonly employeeId:number;
    startDate: Date;
    name: string;
    department: string;
}
const employee: Employee={
    employeeId:123,
    startDate: new Date(),
    name: "anna",
    department: "finance",

}
employee.employeeId="alice"