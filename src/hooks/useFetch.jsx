import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

function useFetch(fetchItems) {
  const [items, setItems] = useState([]);
  const [status, setStatus] = useState(Status.PENDING);

  useEffect(() => {
    fetchItems()
      .then(items => {
        setItems(items);
        setStatus(items.length ? Status.RESOLVED : Status.REJECTED);
      })
      .catch(() => setStatus(Status.REJECTED));
  }, [fetchItems]);

  return [items, status];
}

useFetch.propTypes = {
  fetchItems: PropTypes.func.isRequired,
};

export { useFetch, Status };
