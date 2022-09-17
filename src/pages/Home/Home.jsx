import MoviesList from "components/MoviesList/MoviesList";

const Home = ({ movies }) => {
  return (
    <main>
      <h3>(home page) Trend list</h3>
      <MoviesList movies={movies} />
    </main>
  );
};

export default Home;

// getMovies()
