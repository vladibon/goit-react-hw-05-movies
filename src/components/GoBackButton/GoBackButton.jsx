import { useNavigate } from 'react-router-dom';
import { HiOutlineArrowNarrowLeft as ArrowLeft } from 'react-icons/hi';
import s from './GoBackButton.module.css';

function GoBackButton() {
  const navigate = useNavigate();

  return (
    <button className={s.button} type='button' onClick={() => navigate(-1)}>
      <ArrowLeft className={s.icon} />
      Go back
    </button>
  );
}

export default GoBackButton;
