import React ,{useState} from 'react';
function ToDoList(){
    const[tasks,setTasks]=useState([]);
    const[newtask,setNewTask]=useState("");
    function handleInputChange(event){
        setNewTask(event.target.value);

    }
    function addTask(){
        if(newtask.trim!==""){
        setTasks(t=>[...t,newtask])
        setNewTask("")};

    }
    function deleteTask(index){
        const updateTasks=tasks.filter((_, i)=> i!==index);
        setTasks(updateTasks);
    } 
    function moveTaskUp(index){
        if(index>0){
            const updatedTasks=[...tasks];
            [updatedTasks[index],updatedTasks[index-1]]=[updatedTasks[index-1],updatedTasks[index]];
            setTasks(updatedTasks); 
        }

    }
    function moveTaskDown(index){
         if(index<tasks.length-1){
            const updatedTasks=[...tasks];
            [updatedTasks[index],updatedTasks[index+1]]=[updatedTasks[index+1],updatedTasks[index]];
            setTasks(updatedTasks); 
        }
        
    }
    return(
     <div className='to-do-list'>
        <h1>To-Do-List</h1>
        <div>
            <input type="text"
                    placeholder='Enter a task...'
                    value={newtask}
                    onChange={handleInputChange}/>
                    <button className='add-button' 
                            onClick={addTask}>Add</button>
        </div>
        <ol>
            {tasks.map((task,index)=>
            <li key={index}><span className='text'>{task}</span>
            <button className='delete-button'
                      onClick={()=>deleteTask(index)}>Delete
                </button>
            <button className='move-button'
                      onClick={()=>moveTaskUp(index)}>⬆️
            </button>
            <button className='move-button'
                      onClick={()=>moveTaskDown(index)}>⬇️
            </button>
                </li>
            )}
            
        </ol>

    </div>


        )}
export default ToDoList