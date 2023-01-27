import MovieCard from "./layout/MovieCard";

const MovieScreen = (props) => {
  const { removeMovie, addMovie, list, page, setPage, movieList } = props;

  const decrement = () => {
    setPage(page - 1);
  };

  const increment = () => {
    setPage(page + 1);
  };

  const movieDisplay = movieList.map((movie, index) => {
    return (
      <MovieCard
        list={list}
        removeMovie={removeMovie}
        addMovie={addMovie}
        movie={movie}
      >
        {movie.original_title}
      </MovieCard>
    );
  });

  return (
    <div className="page">
      <h1>George's Movie Theatre</h1>
      <h3>Add a movie to your watchlist</h3>
      <div className="btn-container">
        <button onClick={page !== 1 && decrement}>Previous</button>
        <button onClick={increment}>Next</button>
      </div>
      <div className="movie-container">{movieDisplay}</div>
    </div>
  );
};

export default MovieScreen;
