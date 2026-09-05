
function Student(props){
    return(
        <div className="student">
            <p>Name {props.name}</p>
            <p> age: {props.age}</p>
            <p> Student: {props.isStudent ? "yes" : "no"}</p>
        </div>
    )
}
Student.defaultProps={
    name: "guest",
    age:0,
    isStudent: false
}
export default Student