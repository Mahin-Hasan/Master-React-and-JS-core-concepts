import { useContext } from "react";
import { MovieContext } from "../context/GlobalState";

const Watched = () => {
    const { state } = useContext(MovieContext);

    return (
        <div className="movie-watched">
            <h2>Watched </h2>
            <div className="watch-list-wrapper">
        {state.watched && state.watched.length > 0 ? (
          state.watched.map((movieItem) => (
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
                <button>Remove From watched</button>
                <button>Move to Watched</button>
              </div>
            </div>
          ))
        ) : (
          <h1>No Movie Added in watched</h1>
        )}
      </div>
        </div>
    );
};

export default Watched;