import { useParams } from 'react-router-dom';
import { useFetch, Status } from 'hooks/useFetch';
import { URL } from 'api/movie-db';
import s from './Cast.module.css';
import defaultImage from 'images/defaultCast.png';

function Cast() {
  const { movieId } = useParams();
  const [cast, status] = useFetch(movieId, 'credits');

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

export { Cast };
