import { Routes, Route } from 'react-router-dom';
import { Container } from 'components/Container';
import { AppBar } from 'components/AppBar';
import { HomePage } from 'pages/HomePage';
import { MoviesPage } from 'pages/MoviesPage';
import { MovieDetailsPage } from 'pages/MovieDetailsPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { Cast } from 'components/Cast';
import { Reviews } from 'components/Reviews';

function App() {
  return (
    <>
      <AppBar />

      <Container>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/movies' element={<MoviesPage />} />
          <Route path='/movies/:movieId' element={<MovieDetailsPage />}>
            <Route path='cast' element={<Cast />} />
            <Route path='reviews' element={<Reviews />} />
          </Route>
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Container>
    </>
  );
}

export { App };
