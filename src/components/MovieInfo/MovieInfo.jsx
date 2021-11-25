import PropTypes from 'prop-types';
import { URL } from 'api/movie-db';
import s from './MovieInfo.module.css';
import defaultImage from 'images/defaultImage.png';

function MovieInfo({ movie: { poster_path, title, overview } }) {
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
          <h3 className={s.descrTitle}>Overview</h3>
          <p>{overview}</p>
        </div>
      </div>
    </article>
  );
}

MovieInfo.propTypes = {
  poster_path: PropTypes.string,
  title: PropTypes.string,
  overview: PropTypes.string,
};

export default MovieInfo;
