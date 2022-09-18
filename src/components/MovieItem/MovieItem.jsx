import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MovieItem = ({ name, id, state }) => {
  return (
    <li>
      <Link to={`/movies/${id}`} state={state}>
        {name}
      </Link>
    </li>
  );
};

export default MovieItem;

MovieItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
