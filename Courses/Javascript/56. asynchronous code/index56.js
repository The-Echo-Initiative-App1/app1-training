
function func1(callback){
    setTimeout(() => {console.log("task1"); callback()},3000);
}
function func2(){
    console.log("task1");
    console.log("task2");
    console.log("task3");

}
func1(func2);
