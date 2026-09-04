import React, { useState } from "react";
import MovieCard from "./MovieCard";
function MovieExplorer(){
    const[newMovie,setNewMovie]=useState("");
    
    const fakeMovies = [
    {
        title: "Batman",
        genre: "Action",
        year: 2022,
        image: "batman.jpg",
        description: "A superhero movie"
    },
    {
        title: "Avengers",
        genre: "Action",
        year: 2019,
        image: "avengers.jpg",
        description: "Superheroes save the world"
    },
    {
        title: "Frozen",
        genre: "Animation",
        year: 2013,
        image: "frozen.jpg",
        description: "Two sisters in a magical kingdom"
    }
];
const[Movies,setMovies]=useState(fakeMovies);
    function handleInputChange(event){
        setNewMovie(event.target.value)
    }
    function addMovie(){
       if(newMovie.trim()!==""){
          setMovies([...Movies,newMovie]);
          setNewMovie("");
       }
    }
    function favmovies(index){
        const updatedMovies=[...Movies];
         updatedMovies[index] = {
        ...updatedMovies[index],
        title: updatedMovies[index].title + "⭐"
    };
        setMovies(updatedMovies);

    }
    function likemovies(index){
        const updatedMovies=[...Movies];
         updatedMovies[index] = {
        ...updatedMovies[index],
        title: updatedMovies[index].title + " 🩷"
    }
        setMovies(updatedMovies);

    }

    return(<>
    <div className="component">
        <h1 className="movie-explorer">Movie Explorer</h1>
        <input className="search-bar" placeholder="Find a movie"  value={newMovie} onChange={handleInputChange}/>
            <button className="addButton" onClick={addMovie}>Find</button>
               {Movies.map((movie,index) => (
                 <div className="btn">
                 <p>{movie.title}</p>
                 <button className="favButton" onClick={()=>favmovies(index)} >add to favorite movies list</button> 
                 <button className="likeButton" onClick={()=>likemovies(index)} >I like this movie</button> 
                 </div>
        
                
                ))}
            
    <MovieCard
    title="Batman"
    genre="Action"
    year="2022"
    image="..."
    description="A superhero movie"
                             />      
    </div>
   
   
   
    </>)
}
export default MovieExplorer