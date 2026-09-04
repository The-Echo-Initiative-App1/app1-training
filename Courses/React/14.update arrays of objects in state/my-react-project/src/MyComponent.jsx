import React ,{useState} from 'react';
function MyComponent(){
    const [cars,setCars]=useState([]);
    const [carYear,setCarYear]=useState(new Date().getFullYear());
    const[carMake,setCarMake]=useState("");
    const[carModel,setCarModel]=useState("");
    function handelAddCar(){
        const newCar={year:carYear ,make:carMake, model:carModel};
        setCars(c=>[...c,newCar]);
        setCarYear(new Date().getFullYear())
        setCarMake("");
        setCarModel("");

    }
    function handelRemoveCar(index){
        setCars(c=>c.filter((_,i) => i!==index))


    }
    function handeYearChange(event){
        setCarYear(event.target.value);

    }
    function handelMakeChange(event){
        setCarMake(event.target.value);

    }
    function handelModelChange(event){
        setCarModel(event.target.value);

    }
    return(<div>
        <h2>List of Car Objects</h2>
        <ul>
             {cars.map((car,index)=>
             <li key={index} onClick={()=>handelRemoveCar(index)}>
                {car.year} {car.make} {car.model}
             </li>
            )}
        </ul>
        <input type='number' value={carYear} 
        onChange={handeYearChange}></input><br></br>
        <input type='text' value={carMake} 
        onChange={handelMakeChange} placeholder='Enter car make'></input><br></br>
          <input type='text' value={carModel} 
        onChange={handelModelChange} placeholder='Enter car model'></input><br></br>
        <button onClick={handelAddCar}>Add car</button>
    </div>)
}
export default MyComponent