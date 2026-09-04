//Project
//Build a Movie Explorer.

import React, { useState } from "react"

//Requirements:

//Multiple components
//Props
//State
//Hooks
//Search bar
//Like/Favorite button
//Movie cards
//Fake movie data
function MovieExplorer(){
    const [newInput,setNewInput]=useState("");

    function handleInputChange(event){
        setNewInput(event.target.value)
    }
    return(<>
    <div>
        <h1 className="novie-explorer">Movie Explorer</h1>
        <input className="search-bar" placeholder="Find a movie"  value={newInput} onChange={handleInputChange}/>
    </div>
    </>)
}
export default MovieExplorer