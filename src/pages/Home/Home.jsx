import MoviesList from "components/MoviesList/MoviesList";

const Home = ({ movies, selectMovie }) => {
  return (
    <main>
      <h3>(home page) Trend list</h3>
      <MoviesList movies={movies} selectMovie={selectMovie} />
    </main>
  );
};

export default Home;

// getMovies()
