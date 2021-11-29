import Container from 'components/Container';
import Navigation from 'components/AppBar/Navigation';
import { ReactComponent as TmdbLogo } from 'images/tmdb_logo.svg';
import s from './AppBar.module.css';

function AppBar() {
  return (
    <header className={s.header}>
      <Container>
        <div className={s.wrapper}>
          <Navigation />

          <a
            className={s.logoLink}
            href='https://www.themoviedb.org/'
            target='_blank'
            rel='nofollow noreferrer'
            aria-label='The Movie Datebase API'
          >
            <TmdbLogo className={s.logo} />
          </a>
        </div>
      </Container>
    </header>
  );
}

export default AppBar;
