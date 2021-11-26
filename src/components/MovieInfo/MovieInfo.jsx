import PropTypes from 'prop-types';
import { URL } from 'api/movie-db';
import s from './MovieInfo.module.css';
import defaultImage from 'images/defaultImage.png';

function MovieInfo({
  movie: {
    poster_path,
    title,
    production_countries: countries,
    release_date,
    overview,
    genres,
    popularity,
    vote_average,
  },
}) {
  const stringify = arr => arr.map(({ name }) => name).join(', ');

  return (
    <article className={s.card}>
      <div className={s.thumb}>
        <img
          src={poster_path ? `${URL.IMAGE}${poster_path}` : defaultImage}
          alt={title}
        />
      </div>

      <div className={s.content}>
        <h2 className={s.title}>{title}</h2>

        <div className={s.descr}>
          <p>{`${stringify(countries)} | ${release_date.slice(0, 4)}`}</p>

          <h3 className={s.descrTitle}>Overview</h3>
          <p>{overview}</p>

          <h4>Genres:</h4>
          <p>{stringify(genres)}</p>

          <h4>Popularity:</h4>
          <p>{popularity}</p>

          <h4>User score:</h4>
          <p>{vote_average}</p>
        </div>
      </div>
    </article>
  );
}

MovieInfo.propTypes = {
  poster_path: PropTypes.string,
  title: PropTypes.string,
  overview: PropTypes.string,
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    }),
  ),
};

export default MovieInfo;
