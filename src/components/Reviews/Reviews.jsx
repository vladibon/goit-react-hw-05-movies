import { useParams } from 'react-router-dom';
import { useFetch, Status } from 'hooks/useFetch';
import { fetchReviews } from 'api/movie-db';
import s from './Reviews.module.css';

function Reviews() {
  const { movieId } = useParams();
  const [reviews, status] = useFetch(() => fetchReviews(movieId));

  return (
    <>
      {status === Status.RESOLVED && (
        <div className={s.reviews}>
          <ul>
            {reviews.map(({ id, author, content }) => (
              <li className={s.reviewsItem} key={id}>
                <p className={s.author}>Author: {author}</p>
                <p className={s.content}>{content}</p>
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
