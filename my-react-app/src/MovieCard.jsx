import { useState } from "react";

function MovieCard(props) {
  const [isFavorite, setIsFavorite] = useState(false);

  function switchFavorite() {
        setIsFavorite(!isFavorite);
  }
  return (
    <div className="movie-card">
      <h2>{props.movie.title}</h2>
      <p>{props.movie.year}</p>
      <p>{props.movie.genre}</p>
      <p>⭐ {props.movie.rating}</p>

      <button onClick={switchFavorite}>
        {isFavorite ? "❤️ Favorite" : "♡ Favorite"}
      </button>
    </div>
  );

}
export default MovieCard