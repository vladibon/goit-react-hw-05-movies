import { NavLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from './MovieDetailsControls.module.css';

function MovieDetailsControls({ trailerKey }) {
  const location = useLocation();

  const applyClassName = ({ isActive }) => (isActive ? s.activeLink : s.link);

  return (
    <div>
      <NavLink
        to='cast'
        replace
        state={{ from: location.state?.from }}
        className={applyClassName}
      >
        Cast
      </NavLink>

      <NavLink
        to='reviews'
        replace
        state={{ from: location.state?.from }}
        className={applyClassName}
      >
        Reviews
      </NavLink>

      {trailerKey && (
        <NavLink
          to='trailer'
          state={{ from: location.state?.from }}
          className={applyClassName}
        >
          Trailer
        </NavLink>
      )}
    </div>
  );
}

MovieDetailsControls.propTypes = {
  trailerKey: PropTypes.string,
};

export default MovieDetailsControls;
