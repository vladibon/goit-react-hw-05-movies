import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: '037ec70dbdb1dfe68ab8507aed2e070b',
};

const URL = {
  IMAGE: 'https://image.tmdb.org/t/p/w342',
  TRAILER: 'https://www.youtube.com/embed/',
};

const pathname = {
  trending: 'trending',
  search: 'search',
};

const media_type = {
  movie: 'movie',
};

const time_window = {
  day: 'day',
  week: 'week',
};

const path_params = {
  credits: 'credits',
  reviews: 'reviews',
  videos: 'videos',
};

async function fetchTrendingMovies(page) {
  const { data } = await axios(
    `${pathname.trending}/${media_type.movie}/${time_window.day}`,
    {
      params: { page },
    },
  );

  return data;
}

async function fetchSearchedMovies({ query, page }) {
  const { data } = await axios(`${pathname.search}/${media_type.movie}`, {
    params: { query, page },
  });

  return data;
}

async function fetchMovieDetails(movieId) {
  const { data } = await axios(`${media_type.movie}/${movieId}`);

  return data;
}

async function fetchCast(movieId) {
  const { data } = await axios(
    `${media_type.movie}/${movieId}/${path_params.credits}`,
  );

  return data.cast;
}

async function fetchReviews(movieId) {
  const { data } = await axios(
    `${media_type.movie}/${movieId}/${path_params.reviews}`,
  );

  return data.results;
}

async function fetchTrailerKey(movieId) {
  const { data } = await axios(
    `${media_type.movie}/${movieId}/${path_params.videos}`,
  );

  return data.results[0]?.key;
}

export {
  URL,
  fetchTrendingMovies,
  fetchSearchedMovies,
  fetchMovieDetails,
  fetchCast,
  fetchReviews,
  fetchTrailerKey,
};
