import PropTypes from 'prop-types';
import { URL } from 'api/movie-db';
import s from './MovieCard.module.css';
import defaultImage from 'images/defaultImage.png';

function MovieCard({ poster_path, title, release_date }) {
  return (
    <article className={s.card}>
      <img
        src={poster_path ? `${URL.IMAGE}${poster_path}` : defaultImage}
        alt={title}
      />

      <div className={s.descr}>
        <h3 className={s.title}>{title}</h3>
        <p className={s.date}>{release_date}</p>
      </div>
    </article>
  );
}

MovieCard.propTypes = {
  poster_path: PropTypes.string,
  title: PropTypes.string.isRequired,
  release_date: PropTypes.string,
};

export default MovieCard;
