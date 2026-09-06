import React, {useState} from 'react'
function Counter(){
    const[count, setCount]=useState(0);
    const decrement=()=> {
        setCount(count-1)
    }
    const increment=()=> {
        setCount(count+1)
    }
    const reset=()=> {
        setCount(0)
    }
    return(<div className='counter-container'>
        <p className='count-display'>{count}</p>
        <button className='counter-button' onClick={decrement}>decrement</button>
        <button className='counter-button' onClick={reset}>reset</button>
        <button className='counter-button' onClick={increment}>increment</button>
    </div>)
}
export default Counter