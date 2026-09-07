import { useState } from "react";
import movies from "./movies";
import MovieCard from "./MovieCard";

function MovieExplorer() {
  const [search, setSearch] = useState("");

  function handleSearch(event) {
    setSearch(event.target.value);
  }

  return (
    <div>
      <h1>Movie Explorer</h1>

      <input
        type="text"
        placeholder="Search movies..."
        value={search}
        onChange={handleSearch}
      />

      <div className="movie-list">
        {movies().map(function(item) {
          if (!item.title.toLowerCase().includes(search.toLowerCase())) {
            return null;
          }

          return <MovieCard key={item.id} movie={item} />;
        })}
      </div>
    </div>
  );
}

export default MovieExplorer;