import MovieCard from "./layout/MovieCard";

const Watchlist = (props) => {
  const { removeMovie, list } = props;
  const movieDisplay = list.map((movie) => {
    return <MovieCard list={list} removeMovie={removeMovie} movie={movie} />;
  });

  return (
    <div className="watchlist">
      <h1>My Watchlist</h1>
      <div className="movie-container">{movieDisplay}</div>
    </div>
  );
};

export default Watchlist;
