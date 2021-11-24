import { Navigation } from 'components/Navigation';
import { Container } from 'components/Container';
import { ReactComponent as TmdbLogo } from 'images/tmdb_logo.svg';
import s from './AppBar.module.css';

function AppBar() {
  return (
    <header className={s.header}>
      <Container>
        <div className={s.wrapper}>
          <Navigation />

          <a
            className={s.logo}
            href='https://www.themoviedb.org/'
            target='_blank'
            rel='nofollow noreferrer'
            aria-label='The Movie Datebase API'
          >
            <TmdbLogo width='100%' height='100%' />
          </a>
        </div>
      </Container>
    </header>
  );
}

export { AppBar };
