import { getMoviesDetails } from 'service/api';
import { useState, useRef, Suspense, useEffect } from 'react';
import Movie from 'components/Movie/Movie';
import { LinkBeack, MovieDetailsContainer } from './MovieDetails.styled';
import { Outlet, useLocation, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const location = useLocation();
  const src = useRef(location.state?.from ?? '/movies');

  const { id } = useParams();
  const [movie, setMovie] = useState('');

  useEffect(() => {
    getMoviesDetails(id).then(r => {
      setMovie(m => (m = r));
    });
  }, [id]);

  return (
    <MovieDetailsContainer>
      <LinkBeack to={src.current}>{`← Go beack`}</LinkBeack>
      {movie && <Movie movie={movie} />}
      <Suspense fallback={<div>Loader.........</div>}>
        <Outlet />
      </Suspense>
    </MovieDetailsContainer>
  );
};

export default MovieDetails;
