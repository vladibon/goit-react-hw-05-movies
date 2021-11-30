import { Link, useLocation } from 'react-router-dom';
import { HiOutlineArrowNarrowLeft as ArrowLeft } from 'react-icons/hi';
import s from './GoBackButton.module.css';

function GoBackButton() {
  const location = useLocation();
  const pathname = location.state?.from?.pathname;
  const search = location.state?.from?.search;

  return (
    <Link to={pathname ? `${pathname}${search}` : '/'} className={s.button}>
      <ArrowLeft className={s.icon} />
      Go back
    </Link>
  );
}

export default GoBackButton;
