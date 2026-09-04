import React ,{useState} from 'react';
function MyComponent(){
    const[count,setCount]=useState(0);

    function increment(){
        setCount(c=>
            c+1);
        setCount(c=>
            c+1);


    }
    
    function decrement(){
        setCount( c=>c-1);
        
    }
    
    function reset(){
        setCount(c=>c=0);
        
    } 
    
    
    return(<
        div>
        <p>Count {count}</p>
        <button onClick={decrement}>Decreament</button>
        <button onClick={increment}>increment</button>
        <button onClick={reset}>reset</button>
    </div>

    );
}
export default MyComponent