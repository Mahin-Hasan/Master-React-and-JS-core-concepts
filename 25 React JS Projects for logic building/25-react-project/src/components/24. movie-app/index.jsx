import { useContext } from "react";
import { MovieContext } from "./context/GlobalState";
import MovieCard from "./components/MovieCard";

const MovieApp = () => {
  const { searchMovieParam, setSearchMovieParam, loading, movieSearchResults } =
    useContext(MovieContext);

  return (
    <div className="movie-app">
      <h2>Movie App</h2>
      <div className="search-container">
        <input
          type="text"
          name="searchMovieParam"
          onChange={(e) => setSearchMovieParam(e.target.value)}
          placeholder="Search for a movie"
        />
      </div>
      <div className="movie-search-results-container">
        {movieSearchResults && movieSearchResults.length > 0
          ? movieSearchResults.map((movieItem) => (
              <MovieCard key={movieItem.id} movieItem={movieItem} />
            ))
          : null}
      </div>
    </div>
  );
};

export default MovieApp;
