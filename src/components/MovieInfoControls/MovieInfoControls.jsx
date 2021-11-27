import { useLocation, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from './MovieInfoControls.module.css';

function MovieInfoControls({ trailerKey }) {
  const location = useLocation();

  const applyClassName = ({ isActive }) => (isActive ? s.activeLink : s.link);

  return (
    <div>
      <NavLink to='cast' replace state={location} className={applyClassName}>
        Cast
      </NavLink>

      <NavLink to='reviews' replace state={location} className={applyClassName}>
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
