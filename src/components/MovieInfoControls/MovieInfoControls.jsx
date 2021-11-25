import { NavLink } from 'react-router-dom';
import s from './MovieInfoControls.module.css';

function MovieInfoControls() {
  const applyClassName = ({ isActive }) => (isActive ? s.activeLink : s.link);

  return (
    <div>
      <NavLink to='cast' className={applyClassName}>
        Cast
      </NavLink>

      <NavLink to='reviews' className={applyClassName}>
        Reviews
      </NavLink>
    </div>
  );
}

export default MovieInfoControls;
