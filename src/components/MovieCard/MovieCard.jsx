import PropTypes from 'prop-types';
import { URL } from 'api/movie-db';
import s from './MovieCard.module.css';
import defaultImage from 'images/defaultImage.png';

function MovieCard({ poster_path, title }) {
  return (
    <article className={s.card}>
      <img
        src={poster_path ? `${URL.IMAGE}${poster_path}` : defaultImage}
        alt={title}
      />

      <div className={s.descr}>
        <h3 className={s.title}>{title}</h3>
      </div>
    </article>
  );
}

MovieCard.propTypes = {
  poster_path: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default MovieCard;
