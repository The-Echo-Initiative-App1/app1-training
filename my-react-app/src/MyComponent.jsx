import {useState, useEffect, useRef} from "react";
function MyComponent(){
    const inputRef1=useRef(null);
    const inputRef2=useRef(null);
    const inputRef3=useRef(null);
    useEffect(()=>{
        console.log("component rendered");

    })
    function handleClick1(){
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor="yellow";
        inputRef2.current.style.backgroundColor="";
        inputRef3.current.style.backgroundColor="";
    }
    function handleClick2(){
        inputRef2.current.focus();
        inputRef2.current.style.backgroundColor="yellow";
        inputRef1.current.style.backgroundColor="";
        inputRef3.current.style.backgroundColor="";

    }
    function handleClick3(){
        inputRef3.current.focus();
        inputRef3.current.style.backgroundColor="yellow";
        inputRef2.current.style.backgroundColor="";
        inputRef1.current.style.backgroundColor="";

    }
    return(<div>
        <button onClick={handleClick1}> click me1</button>
        <input ref={inputRef1}/>
        <button onClick={handleClick2}> click me2</button>
        <input ref={inputRef2}/>
        <button onClick={handleClick3}> click me 3</button>
        <input ref={inputRef3}/>
    </div>)
}
export default MyComponent