function Button(){
    const handleclick=(e)=> e.target.textContent="Ouch";
   
    return(<button onDoubleClick={(e)=>handleclick(e)}>Click me</button>);

}
export default Button