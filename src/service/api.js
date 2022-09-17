import axios from 'axios';

const KEY = `api_key=9dfb13779fa5e86c42f825ab68b431d4`;
axios.defaults.baseURL =
  `https://api.themoviedb.org/3/`;

export const getMovies = async () => {
  const response = await axios.get(`trending/movie/day?${KEY}`);
    
    // console.log(response.data.results)
    return response.data.results;
//   return response.results.map(({ id, webformatURL, largeImageURL }) => {
//     return { id, webformatURL, largeImageURL };
//   });
};

export const getMoviesDetails = async (id) => {
  const response = await axios.get(`movie/${id}?${KEY}`);

  // console.log(response.data.results)
  return response.data;
  //   return response.results.map(({ id, webformatURL, largeImageURL }) => {
  //     return { id, webformatURL, largeImageURL };
  //   });
};
