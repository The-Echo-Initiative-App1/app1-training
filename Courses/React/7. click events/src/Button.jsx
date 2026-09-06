
function Button(){
    const handleClick=(e)=> e.target.textContent="ouch";
    return(<button onDoubleClick={(e)=>handleClick(e)}>click me</button>);


}
export default Button