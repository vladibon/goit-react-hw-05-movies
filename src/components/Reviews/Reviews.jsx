import { useParams } from 'react-router-dom';
import { useFetchReviews, Status } from 'hooks/useFetchReviews';
import getMovieId from 'slugify/getMovieId';
import s from './Reviews.module.css';

function Reviews() {
  const { slug } = useParams();
  const movieId = getMovieId(slug);
  const [reviews, status] = useFetchReviews(movieId);

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
