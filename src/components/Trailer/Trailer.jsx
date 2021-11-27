import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useParams, useNavigate } from 'react-router-dom';
import { URL } from 'api/movie-db';
import s from './Trailer.module.css';

const modalRoot = document.querySelector('#modal-root');

function Trailer() {
  const { trailerKey } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = ({ code }) => {
      code === 'Escape' && navigate(-1);
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [navigate]);

  const handleOverlayClick = ({ currentTarget, target }) => {
    currentTarget === target && navigate(-1);
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
