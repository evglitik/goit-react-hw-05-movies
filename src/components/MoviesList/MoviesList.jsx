import MovieItem from 'components/MovieItem/MovieItem';
import { useLocation } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul>
      {movies.map(e => {
        return (
          <MovieItem
            key={e.id}
            id={e.id}
            name={e.title}
            state={{ from: location }}
          />
        );
      })}
    </ul>
  );
};

export default MoviesList;
