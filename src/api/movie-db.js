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

async function fetchTrendingMovies(page) {
  const { data } = await axios(
    `${pathname.trending}/${media_type}/${time_window.day}`,
    {
      params: { page },
    },
  );

  return data;
}

async function fetchSearchedMovies({ query, page }) {
  const { data } = await axios(`${pathname.search}/${media_type}`, {
    params: { query, page },
  });

  return data;
}

async function fetchMovieInfo(movieId) {
  const { data } = await axios(`${media_type}/${movieId}`);

  return data;
}

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
