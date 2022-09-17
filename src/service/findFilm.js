export const findFilm = (movies, id) => {
  const movie = movies.find(movies => movies.id === Number(id));
  return movie;
};
