
const MovieCard = ({movieItem,key}) => {
    return (
        <div className="movie-card" key={key}>
            <div className="movie-card-img">
                {
                    movieItem?.poster_path ? <img src={`https://image.tmdb.org/t/p/w200${movieItem?.poster_path}`}/> : <div className="fill-img"></div>
                }
            </div>
        </div>
    );
};

export default MovieCard;