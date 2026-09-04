import React, { useState } from "react"
function MovieExplorer(){
    const[newMovie,setNewMovie]=useState("");
    const[Movies,setMovies]=useState([]);
    function handleInputChange(event){
        setNewMovie(event.target.value)
    }
    function addMovie(){
       if(newMovie.trim()!==""){
          setMovies([...Movies,newMovie]);
          setNewMovie("");
       }
    }
    function favmovies(){
        const updatedMovies=[...Movies];
        updatedMovies[index]=updatedMovies[index] + "⭐";
        setMovies(updatedMovies);

    }
    function likemovies(){
        const updatedMovies=[...Movies];
        updatedMovies[index]=updatedMovies[index] + "🩷";
        setMovies(updatedMovies);

    }

    return(<>
    <div>
        <h1 className="movie-explorer">Movie Explorer</h1>
        <input className="search-bar" placeholder="Find a movie"  value={newMovie} onChange={handleInputChange}/>
            <button className="addButton" onClick={addMovie}>Find</button>
               {Movies.map((movie) => (
                <p>{movie}</p>
            ))}
        <button className="favButton" onClick={favmovies} >add to favorite movies list</button> 
        <button className="likeButton" onClick={likemovies} >I like this movie</button>    
    </div>
   
   
   
    </>)
}
export default MovieExplorer