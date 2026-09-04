import React, {useState,useEffect} from 'react';

function MyComponent(){
   
   const [height,setHeight]=useState(window.innerHeight);
   const [width,setWidth]=useState(window.innerWidth);
   useEffect(()=>{
    window.addEventListener("resize",handleResize);
    console.log("event added");

    return ()=>{
        window.removeEventListener("resize",handleResize);
        console.log("event removed")
    }
   },[]);
   useEffect(()=>{
    document.title=`Size : ${width} x ${height}`
   },[width,height])
   console.log("event added")
   function handleResize(){
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
   }
   
    return(<><p>Window Width: {width} px</p>
          <p>Window Heigtr: {height} px</p>
    </>);
}
export default MyComponent