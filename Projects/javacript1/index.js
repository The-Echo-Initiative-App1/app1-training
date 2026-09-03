//Requirements:

//Add tasks
//Edit tasks
//Delete tasks
//Mark tasks as complete
//Search tasks
//Filter tasks
//Save tasks using Local Storage

const task=document.getElementById("task");
const ul=document.getElementById("tasklist");
const addbtn=document.getElementById("add");
const deletebtn=document.getElementById("delete");
const editbtn=document.getElementById("edit");
const completed=document.getElementById("completed");
const searchbtn=document.getElementById("searchButton");
const filterdtn=document.getElementById("filterButton");
const search=document.querySelector(".search");


addbtn.addEventListener("click",(event)=>{
   event.preventDefault();
   const  newtask=document.createElement("li");
  const  newtaskinput=document.createElement("input")
  newtaskinput.type="text";
  newtaskinput.id="newtaskinput";
  newtask.id="newtask";
  newtaskinput.placeholder="Enter a Task";
   newtask.appendChild(newtaskinput);
   ul.appendChild(newtask);
})
deletebtn.addEventListener("click",()=>{
   ul.remove();
})
 let selectedtasks=null;
   ul.addEventListener("click",(event)=>{
      if(event.target.matches("li input"))
         selectedtasks=event.target;
   })
editbtn.addEventListener("click",()=>{

  if(selectedtasks){
   selectedtasks.value="edit your Task";
  }

    
})

completed.addEventListener("click",()=>{
  
    if (selectedtasks) {
        selectedtasks.parentElement.append("✅");
        selectedtasks.parentElement.classList.add("completed");
    }
   
   
})
searchbtn.addEventListener("click",(event)=>{
    event.preventDefault();
    const result=document.createElement("h4");
    result.textContent=search.value;
   
})


filterdtn.addEventListener("click",(event)=>{
   event.preventDefault();
   const tasks=document.querySelectorAll("#tasklist li");
   tasks.forEach(task=>{
      if( task.classList.contains("completed")){
         task.style.display="block";

      }
      else{
         task.style.display="none";
      }
   }
   )
   
})