import MoviesList from 'components/MoviesList/MoviesList';
import { useState, useEffect } from 'react';
import { getMovies } from 'service/api';
import { Box } from 'Box';

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
    <Box as='main' p='10px'>
      <h3>Trend list</h3>
      <MoviesList movies={movieInTraid} />
    </Box>
  );
};

export default Home;
