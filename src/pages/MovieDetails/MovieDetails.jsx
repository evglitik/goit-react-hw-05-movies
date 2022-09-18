import { getMoviesDetails } from 'service/api';
import { useState, useRef, Suspense, useEffect } from 'react';
import Movie from 'components/Movie/Movie';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

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
    <main>
      <Link to={src.current}>{`<--- beack`}</Link>
      {movie && <Movie movie={movie} />}
      <Suspense fallback={<div>Loader.........</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MovieDetails;
