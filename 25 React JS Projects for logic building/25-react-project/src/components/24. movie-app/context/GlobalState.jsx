/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import useDebounce from "../../22. debounce-api-call/use-debounce";

export const MovieContext = createContext(null);

function GlobalState({ children }) {
  const [searchMovieParam, setSearchMovieParam] = useState("");
  const [loading, setLoading] = useState(false);
  const [movieSearchResults, setMovieSearchResults] = useState([]);

  const debouincedMovieSearchParamValue = useDebounce(searchMovieParam, 500);
  const tmbd_api_key = import.meta.env.VITE_movieApiKey;
  async function fetchListOfMovies() {
    try {
      setLoading(true);
      const apiResponse = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${tmbd_api_key}&query=${debouincedMovieSearchParamValue}&include_adult=false&language=en-US&page=1`
      );
      const result = await apiResponse.json();
      console.log(result);
      if (result && result.results && result.results.length > 0) {
        setMovieSearchResults(result.results);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchListOfMovies();
  }, [debouincedMovieSearchParamValue]);

  return (
    <MovieContext.Provider
      value={{
        searchMovieParam,
        setSearchMovieParam,
        loading,
        movieSearchResults,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}

export default GlobalState;