import MoviesList from 'components/MoviesList/MoviesList';
import { useState, useEffect } from 'react';
import { getMovies } from 'service/api';

const Home = () => {
  const [movieInTraid, setMovieInTraid] = useState([]);

  useEffect(() => {
    getMovies()
      .then(r => {
        setMovieInTraid(m => [...r]);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <main>
      <h3>Trend list</h3>
      <MoviesList movies={movieInTraid} />
    </main>
  );
};

export default Home;
