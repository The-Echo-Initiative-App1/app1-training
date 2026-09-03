function walkDog(){
    
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const dogwalked=true;
            if(dogwalked){
                resolve("you walk the dog");
            }
            else{
                reject("you didnot walk the dog")
            }
            
            
        }, 1500)    
    })
}
function cleanKitchen(){
     return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const kitchencleaned=true;
            if(kitchencleaned){
                resolve("you cleaned the kitchen");
            }
            else{
                reject("you didnot clean the kitchen")
            }
            
        }, 2500)
    })
}
function takeOutTrash(){
     return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const trashtakenout=false;
            if(trashtakenout){
                resolve("you take out the trash")
            }
            else{
                reject("you dint take out the trash")
            }
            
        }, 500)
    })
}
walkDog().then(value=> {console.log(value); return cleanKitchen()})
         .then(value=>{console.log(value); return takeOutTrash()})
         .then(value => {console.log(value); console.log("you completed all tasks")})
         .catch(error=> console.error(error))   