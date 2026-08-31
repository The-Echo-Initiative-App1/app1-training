function func1(callback){
    setTimeout(()=>{console.log("task1");callback()},3000);

}
function func2(){
    console.log("Task2");
    console.log("Task3");
    console.log("Task4");
}
func1(func2);