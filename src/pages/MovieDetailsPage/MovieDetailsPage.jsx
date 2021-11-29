import { Suspense, lazy, useState, useEffect } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import GoBackButton from 'components/GoBackButton';
import MovieDetails from 'components/MovieDetails';
import MovieDetailsControls from 'components/MovieDetailsControls';
import Loading from 'components/Loading/Loading';
import { fetchMovieDetails, fetchTrailerKey } from 'api/movie-db';
import s from './MovieDetailsPage.module.css';

const Cast = lazy(() =>
  import('components/Cast' /* webpackChunkName: "cast" */),
);
const Reviews = lazy(() =>
  import('components/Reviews' /* webpackChunkName: "reviews" */),
);
const Trailer = lazy(() =>
  import('components/Trailer' /* webpackChunkName: "trailer" */),
);

function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [trailerKey, setTrailerKey] = useState(null);

  useEffect(() => {
    fetchMovieDetails(movieId).then(setMovie);
    fetchTrailerKey(movieId).then(setTrailerKey);
  }, [movieId]);

  return (
    <main>
      <GoBackButton />
      {movie && <MovieDetails movie={movie} />}

      <section>
        <h3 className={s.title}>Additional information</h3>
        <MovieDetailsControls trailerKey={trailerKey} />

        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path='cast' element={<Cast />} />
            <Route path='reviews' element={<Reviews />} />
            <Route path=':trailerKey' element={<Trailer />} />
          </Routes>
        </Suspense>
      </section>
    </main>
  );
}

export default MovieDetailsPage;
