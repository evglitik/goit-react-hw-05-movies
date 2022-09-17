import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import Home from 'pages/Home/Home';
import Movies from 'pages/Movies/Movies';
import MoviePage from 'pages/MoviePage/MoviePage';
import { useState } from 'react';
import { getMovies } from 'service/api';
import { useEffect } from 'react';

export const App = () => {
  const [movieInTraid, setMovieInTraid] = useState([]);
  const [isLoader, setIsLoader] = useState(false);

  useEffect(() => {

    setIsLoader(l => (l = true));

    getMovies()
      .then(r => {
        setMovieInTraid(m => [...r]);
      })
      .catch(err => console.log(err))
      .finally(() => setIsLoader(l => (l = false)));
  }, []);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route
          index
          element={
            isLoader ? <div>Loader..</div> : <Home movies={movieInTraid} />
          }
        />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:id" element={<MoviePage />} />
      </Route>
    </Routes>
  );
};
