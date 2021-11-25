import { useParams } from 'react-router-dom';
import { useFetch, Status } from 'hooks/useFetch';
import s from './Reviews.module.css';

function Reviews() {
  const { movieId } = useParams();
  const [reviews, status] = useFetch(movieId, 'reviews');

  return (
    <>
      {status === Status.RESOLVED && (
        <div className={s.reviews}>
          <ul>
            {reviews.map(({ id, author, content }) => (
              <li className={s.reviewsItem} key={id}>
                <p className={s.author}>Author: {author}</p>
                <p>{content}</p>
              </li>
            ))}
          </ul>
        </div>
      )}

      {status === Status.REJECTED && (
        <p>We don't have any reviews for this movie.</p>
      )}
    </>
  );
}

export default Reviews;
