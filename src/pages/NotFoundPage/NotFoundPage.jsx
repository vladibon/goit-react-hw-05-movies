import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function NotFoundPage() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/');
  }, [navigate]);

  return (
    <main style={{ padding: '1rem' }}>{/* <h1>Page not found</h1> */}</main>
  );
}

export { NotFoundPage };
