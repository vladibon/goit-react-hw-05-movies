import { useNavigate, useLocation } from 'react-router-dom';
import { HiOutlineArrowNarrowLeft as ArrowLeft } from 'react-icons/hi';
import s from './GoBackButton.module.css';

function GoBackButton() {
  const navigate = useNavigate();
  const location = useLocation();

  const pathname = location.state?.from?.pathname;
  const search = location.state?.from?.search;

  return (
    <button
      className={s.button}
      type='button'
      onClick={() => navigate(pathname ? `${pathname}${search}` : '/')}
    >
      <ArrowLeft className={s.icon} />
      Go back
    </button>
  );
}

export default GoBackButton;
