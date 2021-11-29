import { useParams } from 'react-router-dom';
import { useFetchCast, Status } from 'hooks/useFetchCast';
import { URL } from 'api/movie-db';
import getMovieId from 'slugify/getMovieId';
import defaultImage from 'images/defaultCast.png';
import s from './Cast.module.css';

function Cast() {
  const { slug } = useParams();
  const movieId = getMovieId(slug);
  const [cast, status] = useFetchCast(movieId);

  return (
    <>
      {status === Status.RESOLVED && (
        <div className={s.cast}>
          <ul className={s.castList}>
            {cast.map(({ id, name, character, profile_path }) => (
              <li className={s.castItem} key={id}>
                <img
                  className={s.image}
                  src={
                    profile_path ? `${URL.IMAGE}${profile_path}` : defaultImage
                  }
                  alt={name}
                />
                <div className={s.descr}>
                  <h5>{name}</h5>
                  <p className={s.character}>Character: {character}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {status === Status.REJECTED && (
        <p>We don't have any cast information for this movie.</p>
      )}
    </>
  );
}

export default Cast;
