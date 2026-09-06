import ComponentD from "./ComponentD.jsx"
import React, {useContext} from "react"
import { UserContext } from "./ComponentA"
function ComponentC(){
    const user=useContext(useContext);
    return(<div className="box">
        <h1>component a</h1>
        <h2>{`hello again ${user}`}</h2>
        <ComponentD />
        </div>)
}
export default ComponentC