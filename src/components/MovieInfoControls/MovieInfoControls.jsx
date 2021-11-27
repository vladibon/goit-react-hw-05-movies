import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from './MovieInfoControls.module.css';

function MovieInfoControls({ trailerKey }) {
  const applyClassName = ({ isActive }) => (isActive ? s.activeLink : s.link);

  return (
    <div>
      <NavLink to='cast' replace className={applyClassName}>
        Cast
      </NavLink>

      <NavLink to='reviews' replace className={applyClassName}>
        Reviews
      </NavLink>

      {trailerKey && (
        <NavLink to={trailerKey} className={applyClassName}>
          Trailer
        </NavLink>
      )}
    </div>
  );
}

MovieInfoControls.propTypes = {
  trailerKey: PropTypes.string,
};

export default MovieInfoControls;
