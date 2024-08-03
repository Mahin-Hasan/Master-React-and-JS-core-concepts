import { useContext } from "react";
import { MovieContext } from "../context/GlobalState";

const Watchlist = () => {
  const { state } = useContext(MovieContext);

  return (
    <div className="movie-watchlist">
      <h2>Watch List</h2>
      <div className="watch-list-wrapper">
        {state.watchList && state.watchList.length > 0 ? (
          state.watchList.map((movieItem) => (
            <div className="movie-card" key={movieItem.id}>
              <div className="movie-card-img">
                {movieItem?.poster_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w200${movieItem?.poster_path}`}
                  />
                ) : (
                  <div className="fill-img">No Image Available</div>
                )}
              </div>
              <div className="movie-info">
                <h3>{movieItem?.title}</h3>
                <h4>{movieItem?.release_date}</h4>
                <h4>Original Title: {movieItem?.original_title}</h4>
              </div>
              <div className="button-wrapper">
                <button>Remove From Watchlist</button>
                <button>Move to Watched</button>
              </div>
            </div>
          ))
        ) : (
          <h1>No Movie Added in watchList</h1>
        )}
      </div>
    </div>
  );
};

export default Watchlist;
