import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { fetchReviews } from 'api/movie-db';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

function useFetchReviews(movieId) {
  const [items, setItems] = useState([]);
  const [status, setStatus] = useState(Status.PENDING);

  useEffect(() => {
    fetchReviews(movieId)
      .then(items => {
        setItems(items);
        setStatus(items.length ? Status.RESOLVED : Status.REJECTED);
      })
      .catch(() => setStatus(Status.REJECTED));
  }, [movieId]);

  return [items, status];
}

useFetchReviews.propTypes = {
  fetchItems: PropTypes.func.isRequired,
};

export { useFetchReviews, Status };
