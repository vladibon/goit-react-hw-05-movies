import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: '037ec70dbdb1dfe68ab8507aed2e070b',
};

const URL = {
  IMAGE: 'https://image.tmdb.org/t/p/w342',
};

const pathname = {
  trending: 'trending',
  search: 'search',
};
const media_type = 'movie';
const time_window = {
  day: 'day',
  week: 'week',
};
const path_params = {
  credits: 'credits',
  reviews: 'reviews',
};

// /trending/movie/day?api_key=<<api_key>>&page=1
async function fetchTrendingMovies(page) {
  const { data } = await axios(
    `${pathname.trending}/${media_type}/${time_window.day}`,
    {
      params: { page },
    },
  );

  return data;
}

// /search/movie?api_key=<<api_key>>&query='query'&page=1
async function fetchSearchedMovies({ query, page }) {
  const { data } = await axios(`${pathname.search}/${media_type}`, {
    params: { query, page },
  });

  return data;
}

// /movie/{movie_id}?api_key=<<api_key>>
async function fetchMovieInfo(movieId) {
  const { data } = await axios(`${media_type}/${movieId}`);

  return data;
}

// /movie/{movie_id}/credits?api_key=<<api_key>>
// async function fetchMovieCast(movieId) {
//   const { data } = await axios(
//     `${media_type}/${movieId}/${path_params.credits}`,
//   );

//   return data.cast;
// }

// /movie/{movie_id}/reviews?api_key=<<api_key>>&page=1
// async function fetchMovieReviews(movieId) {
//   const { data } = await axios(
//     `${media_type}/${movieId}/${path_params.reviews}`,
//   );

//   return data.results;
// }

async function fetchMovieExtraInfo(movieId, type) {
  const isReviews = type === path_params.reviews;
  const { data } = await axios(
    `${media_type}/${movieId}/${
      isReviews ? path_params.reviews : path_params.credits
    }`,
  );

  return isReviews ? data.results : data.cast;
}

export {
  URL,
  fetchTrendingMovies,
  fetchSearchedMovies,
  fetchMovieInfo,
  fetchMovieExtraInfo,
};
