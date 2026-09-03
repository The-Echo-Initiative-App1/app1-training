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
            const trashtakenout=true;
            if(trashtakenout){
                resolve("you take out the trash")
            }
            else{
                reject("you dint take out the trash")
            }
            
        }, 500)
    })
}
async function doChores(){
    try{
        const walkDogResult=await walkDog();
        console.log(walkDogResult);

        const cleanKitchenResult=await cleanKitchen();
        console.log(cleanKitchenResult);

        const takeouttrashResult=await takeOutTrash();
        console.log(takeouttrashResult);

        console.log("you finished all the chores")
    }
    catch(error){
        console.log(error);
    }
}
doChores()