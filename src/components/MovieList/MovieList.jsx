import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import MovieCard from 'components/MovieList/MovieCard';
import makeSlug from 'slugify/makeSlug';
import s from './MovieList.module.css';

function MovieList({ movies }) {
  const location = useLocation();

  return (
    <ul className={s.gallery}>
      {movies.map(({ id, title, poster_path, release_date }, idx) => (
        <li key={`${id}${idx}`}>
          <Link
            to={`/movies/${makeSlug(`${title} ${id}`)}`}
            state={{ from: location }}
          >
            <MovieCard
              title={title}
              poster_path={poster_path}
              release_date={release_date}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default MovieList;
