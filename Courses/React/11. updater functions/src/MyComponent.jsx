import React, {useState} from "react";
function MyComponent(){
    const[count, setCount]=useState(0);
        function decrement(){
            setCount(c=>c-1);
            setCount(c=>c-1);
            setCount(c=>c-1);

        }
        function increment(){
            setCount(c=> c+1)
            setCount(c=>c+1)
            setCount(c=>c+1)
        }
        function reset(){
            setCount(0);
        }
        return(<div className='counter-container'>
            <p className='count-display'>{count}</p>
            <button className='counter-button' onClick={decrement}>decrement</button>
            <button className='counter-button' onClick={reset}>reset</button>
            <button className='counter-button' onClick={increment}>increment</button>
        </div>)
    
}
export default MyComponent