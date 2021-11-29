import { useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { URL } from 'api/movie-db';
import s from './Trailer.module.css';

const modalRoot = document.querySelector('#modal-root');

function Trailer() {
  const { trailerKey } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const closeTrailer = useCallback(
    () => navigate('..', { state: { from: location.state?.from } }),
    [location.state?.from, navigate],
  );

  useEffect(() => {
    const handleKeyDown = ({ code }) => {
      code === 'Escape' && closeTrailer();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [closeTrailer]);

  const handleOverlayClick = ({ currentTarget, target }) => {
    currentTarget === target && closeTrailer();
  };

  return createPortal(
    <div className={s.overlay} onClick={handleOverlayClick}>
      <iframe
        frameBorder='0'
        src={`${URL.TRAILER}/${trailerKey}`}
        title='YouTube video player'
        allow='accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
        width={document.body.clientWidth / 1.2}
        height={document.body.clientWidth / 2.4}
      ></iframe>
    </div>,
    modalRoot,
  );
}

export default Trailer;
