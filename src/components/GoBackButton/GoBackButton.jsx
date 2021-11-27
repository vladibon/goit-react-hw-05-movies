import { useNavigate, useLocation } from 'react-router-dom';
import { HiOutlineArrowNarrowLeft as ArrowLeft } from 'react-icons/hi';
import s from './GoBackButton.module.css';

function GoBackButton() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <button
      className={s.button}
      type='button'
      onClick={() => navigate(location.state?.pathname ? -1 : '/')}
    >
      <ArrowLeft className={s.icon} />
      Go back
    </button>
  );
}

export default GoBackButton;
