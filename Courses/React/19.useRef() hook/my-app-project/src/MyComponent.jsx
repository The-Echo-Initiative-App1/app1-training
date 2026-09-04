import React, {useState,useEffect,useRef} from 'react';
function MyComponent(){
    const inputRef=useRef(null);
    const inputRef2=useRef(null);
    const inputRef3=useRef(null);

    useEffect(()=>{
        console.log("component rendered");
    })
    
    function handleClick(){
        inputRef.current.focus();
        inputRef.current.style.backgroundColor= "pink";
        inputRef2.current.style.backgroundColor= "";
        inputRef3.current.style.backgroundColor= "";
    }
    function handleClick2(){
        inputRef2.current.focus();
        inputRef2.current.style.backgroundColor= "yellow";
         inputRef.current.style.backgroundColor= "";
        inputRef3.current.style.backgroundColor= "";
    }
    function handleClick3(){
        inputRef3.current.focus();
        inputRef3.current.style.backgroundColor= "blue";
         inputRef.current.style.backgroundColor= "";
        inputRef2.current.style.backgroundColor= "";
    }
    return(<>
    
    <div><button onClick={handleClick}>Click me1
    </button>
    <input ref={inputRef}/>
    
    <button onClick={handleClick2}>Click me2
    </button>
    <input ref={inputRef2}/>
    
    <button onClick={handleClick3}>Click me3
    </button>
    <input ref={inputRef3}/>
    </div>
    
    </>)
}
export default MyComponent