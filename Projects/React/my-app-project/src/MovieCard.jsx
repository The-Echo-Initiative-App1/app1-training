function MovieCard(props){
    return(<>
    <div className="movie">
            <p>Title:{props.title}</p>
            <p>Genre:{props.genre}</p>
            <p>Year:{props.year}</p>
            <p>Image:{props.image}</p>
            <p>Description:{props.description}</p>
            </div>
    </>)

}
export default MovieCard