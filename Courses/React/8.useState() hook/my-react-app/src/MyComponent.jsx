import React,{useState} from 'react';
function MyComponent(){
    const [name,setName]=useState("Guest");
    const [age,setAge]=useState(0);
    const[isEmployed,setIsemployed]=useState(false)
    const updateName=()=>{
        setName("Yasmine");
     }
     const incrementAge=()=>{
        setAge(age+1);
     }
     const toggleEmployedstatus=()=>{
        setIsemployed(!isEmployed);
     }
     


    return(<div>
        <p>Name: {name}</p>
        <button onClick={updateName}>Set Name</button>
       
        <p>age: {age}</p>
        <button onClick={incrementAge}>Increment Age</button>
         
         <p>Is Employed:{isEmployed ? "yes":"No"}</p>
        <button onClick={toggleEmployedstatus}>Toggle Status</button>

    </div>)

}
export default MyComponent