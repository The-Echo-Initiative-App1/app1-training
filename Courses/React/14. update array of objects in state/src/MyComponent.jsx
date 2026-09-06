import React, {useState} from "react";
function MyComponent(){
    const [cars,setCar]=useState([]);
    const [carYear,setCarYear]=useState(new Date().getFullYear());
    const [carMake, setCarMake]=useState("")
    const [carModel, setModel]=useState("")

    function handleAddCar(){
        const newCar={year: carYear, make: carMake, model: carModel};
        setCar(c=>[...c, newCar])
        setCarYear(new Date().getFullYear());
        setCarMake("");
        setModel("")
    }
    function handleRemoveCar(index){
        setCar(c=> c.filter((_, i)=> i!==index))
    }
    function handleYearChange(event){
        setCarYear(event.target.value)
    }
    function handleMakeChange(event){
        setCarMake(event.target.value)
    }
    function handleModelChange(event){
        setModel(event.target.value)
    }
    return(<div>
        <h2>list of car objects</h2>
        <ul>
            {cars.map((car,index)=><li key={index} onClick={()=>handleRemoveCar(index)}>{car.year} {car.make} {car.model}</li>)}
        </ul>
        <input type="number" value={carYear} onChange={handleYearChange}/>
        
        <input type="text" value={carMake} onChange={handleMakeChange} placeholder="enter car make"/><br/>
        <input type="text" value={carModel} onChange={handleModelChange} placeholder="enter car model"/><br/>
        <button onClick={handleAddCar}>add car</button>
    
    </div>)
}
export default MyComponent