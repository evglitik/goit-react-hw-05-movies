import MovieItem from 'components/MovieItem/MovieItem';

const MoviesList = ({ movies, selectMovie }) => {
  
  return (
    <ul>
      {movies.map(e => {
        return <MovieItem key={e.id} id={e.id} name={e.title} />;
      })}
    </ul>
  );
};

export default MoviesList;
