import PropTypes from 'prop-types';
import { URL } from 'api/movie-db';
import s from './MovieInfo.module.css';
import defaultImage from 'images/defaultImage.png';

function MovieInfo({
  movie: {
    poster_path,
    title,
    release_date,
    genres,
    overview,
    popularity,
    vote_average,
    vote_count,
  },
}) {
  return (
    <article className={s.card}>
      <div className={s.thumb}>
        <img
          src={poster_path ? `${URL.IMAGE}${poster_path}` : defaultImage}
          alt={title}
        />
      </div>

      <div className={s.content}>
        <h2 className={s.title}>{`${title} (${release_date.slice(0, 4)})`}</h2>

        <div className={s.about}>
          <p className={s.descr}>{genres.map(({ name }) => name).join(', ')}</p>

          <h3 className={s.title}>Overview</h3>
          <p className={s.descr}>{overview}</p>

          <p className={s.descr}>
            <span className={s.descrTitle}>Popularity:</span> {popularity}
          </p>

          <p className={s.descr}>
            <span className={s.descrTitle}>Score:</span> {vote_average}
          </p>

          <p className={s.descr}>
            <span className={s.descrTitle}>Votes:</span> {vote_count}
          </p>
        </div>
      </div>
    </article>
  );
}

MovieInfo.propTypes = {
  poster_path: PropTypes.string,
  title: PropTypes.string,
  release_date: PropTypes.string,
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    }),
  ),
  overview: PropTypes.string,
  popularity: PropTypes.number,
  vote_average: PropTypes.number,
  vote_count: PropTypes.number,
};

export default MovieInfo;
