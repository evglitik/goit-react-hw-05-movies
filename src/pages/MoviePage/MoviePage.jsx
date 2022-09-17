import { getMoviesDetails } from 'service/api';
import { useEffect } from 'react';
import { useState } from 'react';
import Movie from 'components/Movie/Movie';
import { useParams } from 'react-router-dom';

const MoviePage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState('');

  useEffect(() => {
    getMoviesDetails(id).then(r => {
      setMovie(m => (m = r));
    });
  }, [id]);

  return <Movie movie={movie} />;
};

export default MoviePage;
