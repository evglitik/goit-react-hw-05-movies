import SearchBox from 'components/SearchBox/SearchBox';
import { searchMovies } from 'service/api';
import MoviesList from 'components/MoviesList/MoviesList';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!movieName) {
      setMovies([]);
      return;
    }

    searchMovies(movieName).then(r => {
      setMovies(m => [...r]);
    });
  }, [movieName]);

  const handleFormSubmit = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  return (
    <main>
      <SearchBox onSubmit={handleFormSubmit} />
      <MoviesList movies={movies} />
    </main>
  );
};

export default Movies;
