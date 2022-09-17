import { Link } from 'react-router-dom';

const MovieItem = ({ name, id }) => {
  return (
    <li>
      <Link to={`/movies/${id}`} data-id={id}>
        {' '}
        {name}
      </Link>
    </li>
  );
};

export default MovieItem;
