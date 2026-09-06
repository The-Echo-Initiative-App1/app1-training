import React, {useState} from 'react'
function MyComponent(){
    const [name, setName]=useState("guest");
    const [age, setAge]=useState(0)
    const[isEmployed, setIsEmployed]=useState(false)
    const updateName=()=>{
        setName("anna");
    }
    const incrementAge=()=>{
        setAge(age+1);
    }
    const toggleEmployedStatus=()=>{
        setIsEmployed(!isEmployed)
    }
    return( <div>
        <p>Name: ${name}</p>
        <button onClick={updateName}>set Name</button>
        <p>age: ${age}</p>
        <button onClick={incrementAge}>increment Age</button>
        <p>is Employed: ${isEmployed? "yes" :"no"}</p>
        <button onClick={toggleEmployedStatus}>toggle Status</button>
    </div>)
}
export default MyComponent