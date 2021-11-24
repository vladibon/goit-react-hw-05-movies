import PropTypes from 'prop-types';
import s from './PageControls.module.css';

function PageControls({ page, isLastPage, setNextPage }) {
  return (
    <div className={s.controls}>
      <button
        className={s.button}
        type='button'
        disabled={page === 1}
        onClick={() => setNextPage(-1)}
      >
        Previous page
      </button>

      <button
        className={s.button}
        type='button'
        disabled={isLastPage}
        onClick={() => setNextPage(1)}
      >
        Next page
      </button>
    </div>
  );
}

PageControls.propTypes = {
  page: PropTypes.number.isRequired,
  isLastPage: PropTypes.bool,
  setNextPage: PropTypes.func.isRequired,
};

export { PageControls };
