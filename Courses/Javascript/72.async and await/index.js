function walkTheDog(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        const dogwalked=false;
        if(dogwalked){
          resolve("you walk the dog");
        }
        else{
            reject("you didn't walk the dog")
        }
        
    },1500);
    }
    )
}
function cleanTheKitchen(){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
       kitchencleaned=true;
       if(kitchencleaned){

        resolve("you clean the kitchen");

       }
       else{
        reject("you didn't clean the kitchen")
       }
      
        
    })
    },2500);
}
function takeOutTheTrash(){
    return new Promise((resolve,reject)=>
    {setTimeout(()=>{
        trashtakenout=true;
        if(trashtakenout){
            resolve("you take out the trash");
        }
        else{
            reject("you didn't take out the trash");
        }
    },500);

    }) 

}
//walkTheDog().then(value=>{console.log(value);return cleanTheKitchen()})
   // .then(value=>{console.log(value);return takeOutTheTrash()})
   // .then(value=> {console.log(value);console.log("you finished all the chores")})
   // .catch(error=>console.error(error));
async function doChores(){
    try{ const walkdogresult=await walkTheDog();
    console.log(walkdogresult);
    const cleanresult= await cleanTheKitchen();
    console.log(cleanresult);
    const takeOut=await takeOutTheTrash();
    console.log(takeOut);

    console.log("you finished all the chores");
    }
    catch(error){
        console.error(error);
    }

}
doChores();