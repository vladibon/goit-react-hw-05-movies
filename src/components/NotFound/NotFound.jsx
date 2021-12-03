import s from './NotFound.module.css';
import PropTypes from 'prop-types';

function NotFound({ message }) {
  return (
    <div className={s.container}>
      <h2 className={s.title}>Something went wrong</h2>
      <p>Error: {message}</p>
    </div>
  );
}

NotFound.propTypes = {
  message: PropTypes.string,
};

export default NotFound;
