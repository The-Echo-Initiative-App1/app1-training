function Profilepicture(){
      const imgUrl='./src/assets/Profile.jpg';
      const handleclick=(e)=> e.target.style.display="none";
      return(<img onClick={(e)=>handleclick(e)} src={imgUrl} width="300px"></img>);
}
export default Profilepicture