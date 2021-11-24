import { useState, useEffect } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { MovieInfo } from 'components/MovieInfo';
import { MovieInfoControls } from 'components/MovieInfoControls';
import { GoBackButton } from 'components/GoBackButton';
import { fetchMovieInfo } from 'api/movie-db';
import s from './MovieDetailsPage.module.css';

function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovieInfo(movieId).then(setMovie);
  }, [movieId]);

  return (
    <main>
      <GoBackButton />

      {movie && <MovieInfo movie={movie} />}

      <section>
        <h3 className={s.title}>Additional information</h3>
        <MovieInfoControls />
        <Outlet />
      </section>
    </main>
  );
}

export { MovieDetailsPage };
