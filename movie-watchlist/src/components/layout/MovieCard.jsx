const MovieCard = (props) => {
  const { removeMovie, list, addMovie, movie } = props;

  const inWatchList = list.filter((mov) => {
    return mov.id === movie.id;
  });

  const button =
    inWatchList.length === 0 ? (
      <button onClick={() => addMovie(movie)}>Add to List</button>
    ) : (
      <button onClick={() => removeMovie(movie)}>Remove from List</button>
    );

  return (
    <div className="movie-card">
      <div>
        <img
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt="TEST"
        />
        <h3>{movie.original_title}</h3>
      </div>
      {button}
      {props.children}
    </div>
  );
};

export default MovieCard;
