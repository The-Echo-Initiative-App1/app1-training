import React, {useState,createContext} from 'react';
import MyComponentB from "./MyComponentB";
export const UserContext=createContext();
function MyComponentA(){
    const[user,setUser]=useState("yasmine");
    
    return(<>
    <div className="box">
        <h1>ComponentA</h1>
        <h2>{`hello ${user}`}</h2>
        <UserContext.Provider value={user}>
        <MyComponentB user={user}/>
        /</UserContext.Provider>

    </div>
    </>);
}
export default MyComponentA