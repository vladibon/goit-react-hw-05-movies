import { useState, useEffect } from 'react';
import { fetchMovieExtraInfo } from 'api/movie-db';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

function useFetch(movieId, type) {
  const [items, setItems] = useState([]);
  const [status, setStatus] = useState(Status.PENDING);

  useEffect(() => {
    fetchMovieExtraInfo(movieId, type)
      .then(items => {
        setItems(items);
        setStatus(items.length ? Status.RESOLVED : Status.REJECTED);
      })
      .catch(() => setStatus(Status.REJECTED));
  }, [movieId, type]);

  return [items, status];
}

export { useFetch, Status };
