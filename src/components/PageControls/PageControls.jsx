import PropTypes from 'prop-types';
import {
  HiOutlineArrowNarrowLeft as ArrowLeft,
  HiOutlineArrowNarrowRight as ArrowRight,
} from 'react-icons/hi';
import s from './PageControls.module.css';

function PageControls({ page, setPage, isLastPage }) {
  return (
    <div className={s.controls}>
      <button
        className={s.button}
        type='button'
        aria-label='Previous page'
        onClick={() => setPage(-1)}
        disabled={page === 1}
      >
        <ArrowLeft className={s.icon} />
      </button>

      <p className={s.page}>{page}</p>

      <button
        className={s.button}
        type='button'
        aria-label='Next page'
        onClick={() => setPage(1)}
        disabled={isLastPage}
      >
        <ArrowRight className={s.icon} />
      </button>
    </div>
  );
}

PageControls.propTypes = {
  page: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
  isLastPage: PropTypes.bool,
};

export default PageControls;
