import { Link } from 'react-router-dom';

const baseUrlImg = `https://image.tmdb.org/t/p/w500`;

//  = `/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg`,

const Movie = ({ movie }) => {
  const { title, release_date, overview, genre_ids, popularity, poster_path } =
    movie;

  return (
    <main>
      <div>
        <button type="butoon">{`<- Go beack`}</button>
        <img src={`${baseUrlImg}${poster_path}`} alt="poster" width={250} />
        <h2>
          {title}
          <span> {`(${release_date})`}</span>
        </h2>

        <p>
          UserScore: <span>{popularity}</span>
        </p>
        <h3>Overvie</h3>
        <p>{overview}</p>
        <h3>Generes</h3>
        <p>{genre_ids}</p>
      </div>
      <div>
        <h3>Aditional info</h3>
        <ul>
          <li>
            <Link>Cast</Link>
          </li>
          <li>
            <Link>Reviews</Link>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Movie;
