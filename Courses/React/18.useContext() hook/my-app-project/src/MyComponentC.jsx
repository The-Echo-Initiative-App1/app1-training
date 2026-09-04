import MyComponentD from "./MyComponentD";
import React, {useContext} from 'react';
import { UserContext } from './MyComponentA';
import { use } from "react";
function MyComponentC(){
    const user=useContext(UserContext);
    return(
    <div className="box">
        <h1>ComponentC</h1>
        <h2>{`Hello again ${user}`}</h2>
        <MyComponentD/>
    </div>
   )
}
export default MyComponentC