const MovieCard = ({ movieItem, key }) => {
  return (
    <div className="movie-card" key={key}>
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
        <button>Add to Watchlist</button>
        <button>Add to Watched</button>
      </div>
    </div>
  );
};

export default MovieCard;
