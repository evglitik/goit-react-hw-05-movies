import axios from 'axios';

const KEY = `api_key=9dfb13779fa5e86c42f825ab68b431d4`;
axios.defaults.baseURL = `https://api.themoviedb.org/3/`;

export const getMovies = async () => {
  const response = await axios.get(`trending/movie/day?${KEY}`);
  return response.data.results;
};

export const getMoviesDetails = async id => {
  const response = await axios.get(`movie/${id}?${KEY}`);
  return response.data;
};

export const searchMovies = async request => {
  const response = await axios.get(
    `search/movie?${KEY}&language=en-US&query=${request}&page=1&include_adult=false`
  );
  return response.data.results;
};

export const getCast = async id => {
  const response = await axios.get(`movie/${id}/credits?${KEY}&language=en-US`);
  return response.data.cast;
};

export const getReviews = async id => {
  const response = await axios.get(`movie/${id}/reviews?${KEY}&language=en-US`);
  return response.data.results;
};
