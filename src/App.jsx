import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AppBar from 'components/AppBar';
import Container from 'components/Container';
import Loading from 'components/Loading/Loading';
import Cast from 'components/Cast';
import Reviews from 'components/Reviews';
import Trailer from 'components/Trailer';

const HomePage = lazy(() =>
  import('pages/HomePage' /* webpackChunkName: "home-page" */),
);
const MoviesPage = lazy(() =>
  import('pages/MoviesPage' /* webpackChunkName: "movies-page" */),
);
const MovieDetailsPage = lazy(() =>
  import('pages/MovieDetailsPage' /* webpackChunkName: "details-page" */),
);

function App() {
  return (
    <>
      <AppBar />

      <Container>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/movies' element={<MoviesPage />} />
            <Route path='/movies/:movieId' element={<MovieDetailsPage />}>
              <Route path='cast' element={<Cast />} />
              <Route path='reviews' element={<Reviews />} />
              <Route path=':trailerKey' element={<Trailer />} />
            </Route>
            <Route path='*' element={<Navigate replace to='/' />} />
          </Routes>
        </Suspense>
      </Container>
    </>
  );
}

export default App;
