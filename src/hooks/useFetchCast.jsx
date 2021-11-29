import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { fetchCast } from 'api/movie-db';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

function useFetchCast(movieId) {
  const [items, setItems] = useState([]);
  const [status, setStatus] = useState(Status.PENDING);

  useEffect(() => {
    fetchCast(movieId)
      .then(items => {
        setItems(items);
        setStatus(items.length ? Status.RESOLVED : Status.REJECTED);
      })
      .catch(() => setStatus(Status.REJECTED));
  }, [movieId]);

  return [items, status];
}

useFetchCast.propTypes = {
  fetchItems: PropTypes.func.isRequired,
};

export { useFetchCast, Status };
