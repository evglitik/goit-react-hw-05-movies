import { getMoviesDetails } from 'service/api';
import { useEffect } from 'react';
import { useState } from 'react';
import Movie from 'components/Movie/Movie';
import { useParams } from 'react-router-dom';

const MoviePage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState('');
  const [isLoader, setIsLoader] = useState(false);

  useEffect(() => {
    setIsLoader(l => (l = true));

    getMoviesDetails(id)
      .then(r => {
        setMovie(m => (m = r));
      })
      .finally(() => setIsLoader(l => (l = false)));
  }, [id]);

  console.log(id);

  return (
    <>
      <Movie movie={movie} />
    </>
  );
};

export default MoviePage;
