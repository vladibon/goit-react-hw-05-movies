import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

function Navigation() {
  const applyClassName = ({ isActive }) => (isActive ? s.activeLink : s.link);

  return (
    <nav className={s.nav}>
      <NavLink to='/' className={applyClassName}>
        Home
      </NavLink>

      <NavLink to='/movies' className={applyClassName}>
        Movies
      </NavLink>
    </nav>
  );
}

export default Navigation;
