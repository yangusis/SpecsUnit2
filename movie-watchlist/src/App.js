import { useEffect, useState } from "react";
import MovieScreen from "./components/MovieScreen";
import Header from "./components/Header";
import Watchlist from "./components/Watchlist";
import axios from "axios";
import "./App.css";

function App() {
  const [movieList, setMovieList] = useState([]);
  const [watchList, setWatchList] = useState([]);
  const [page, setPage] = useState(1);

  const addMovie = (movie) => {
    setWatchList([...watchList, movie]);
  };

  const removeMovie = (movie) => {
    const newState = watchList.filter((mov) => {
      return mov !== movie;
    });
    setWatchList(newState);
  };

  useEffect(() => {
    const getData = () => {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`
        )
        .then((res) => {
          console.log(res.data.results);
          setMovieList(res.data.results);
        });
    };
    getData();
  }, [page]);

  return (
    <div className="App">
      <Header />
      <main>
        <MovieScreen
          removeMovie={removeMovie}
          addMovie={addMovie}
          list={watchList}
          page={page}
          setPage={setPage}
          movieList={movieList}
        />
        <Watchlist removeMovie={removeMovie} list={watchList} />
      </main>
    </div>
  );
}

export default App;
