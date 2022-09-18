import axios from 'axios';

const KEY = `api_key=9dfb13779fa5e86c42f825ab68b431d4`;
axios.defaults.baseURL = `https://api.themoviedb.org/3/`;

export const getMovies = async () => {
  const response = await axios.get(`trending/movie/day?${KEY}`);

  // console.log(response.data.results)
  return response.data.results;
  //   return response.results.map(({ id, webformatURL, largeImageURL }) => {
  //     return { id, webformatURL, largeImageURL };
  //   });
};

export const getMoviesDetails = async id => {
  const response = await axios.get(`movie/${id}?${KEY}`);

  // console.log(response.data.results)
  return response.data;
  //   return response.results.map(({ id, webformatURL, largeImageURL }) => {
  //     return { id, webformatURL, largeImageURL };
  //   });
};

export const searchMovies = async request => {
  const response = await axios.get(
    `search/movie?${KEY}&language=en-US&query=${request}&page=1&include_adult=false`
  );

  // console.log(response.data.results)
  return response.data.results;
  //   return response.results.map(({ id, webformatURL, largeImageURL }) => {
  //     return { id, webformatURL, largeImageURL };
  //   });
};

export const getCast = async id => {
  const response = await axios.get(`movie/${id}/credits?${KEY}&language=en-US`);

  return response.data.cast;
  //   return response.results.map(({ id, webformatURL, largeImageURL }) => {
  //     return { id, webformatURL, largeImageURL };
  //   });
};

export const getReviews = async id => {
  const response = await axios.get(`movie/${id}/reviews?${KEY}&language=en-US`);
  return response.data.results;
  //   return response.results.map(({ id, webformatURL, largeImageURL }) => {
  //     return { id, webformatURL, largeImageURL };
  //   });
};

// https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US
// https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false
