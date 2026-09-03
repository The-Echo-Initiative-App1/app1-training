
function task1(callback){
    setTimeout(()=>{
    console.log("task 1 completed")
    callback();}, 2000)
    
}
function task2(callback){
    setTimeout(()=>{
    console.log("task 2 completed")
    callback();}, 1000)
    
}
function task3(callback){
    setTimeout(()=>{
    console.log("task 3 completed")
    callback();}, 3000)
    
}
function task4(callback){
    setTimeout(()=>{
    console.log("task 4 completed")
    callback();}, 1500)
    
}

task1(()=> {
    task2(()=> {
        task3(()=> {
            task4(()=>console.log("all tasks complete"))
        })
    });
});
