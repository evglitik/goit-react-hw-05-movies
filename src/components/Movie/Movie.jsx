import PropTypes from 'prop-types';
import {
  MovieInfoContainer,
  GanreList,
  Aditional,
  AditionalList,
} from './Movie.styled';
import { cutString, countProcentVote } from 'service/fixString';
import { Link } from 'react-router-dom';

const Movie = ({ movie }) => {
  const { title, release_date, overview, poster_path, vote_count, id, genres } =
    movie;

  let baseUrlImg = `https://image.tmdb.org/t/p/w500${poster_path}`;

  if (!poster_path) {
    baseUrlImg = `https://netsh.pp.ua/wp-content/uploads/2017/08/Placeholder-1.png`;
  }

  return (
    <>
      <MovieInfoContainer>
        <div>
          <img src={baseUrlImg} alt="poster" width={250} />
        </div>

        <div>
          <h2>
            {title}
            <span> {`(${cutString(release_date)})`}</span>
          </h2>

          <p>
            User Score: <span>{countProcentVote(vote_count)}%</span>
          </p>
          <h3>Overvie</h3>
          <p>{overview}</p>
          <h3>Generes</h3>
          <GanreList>
            {genres.map(({ id, name }) => (
              <li key={id}>{name}</li>
            ))}
          </GanreList>
        </div>
      </MovieInfoContainer>
      <Aditional>
        <p>Aditional information</p>
        <AditionalList>
          <li>
            <Link to="cast" id={id}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" id={id}>
              Reviews
            </Link>
          </li>
        </AditionalList>
      </Aditional>
    </>
  );
};

export default Movie;

Movie.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    release_date: PropTypes.string,
    overview: PropTypes.string,
    poster_path: PropTypes.string,
    vote_count: PropTypes.number,
    id: PropTypes.number,
    genres: PropTypes.array,
  }).isRequired,
};
