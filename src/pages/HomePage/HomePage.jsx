import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Section from 'components/Section/Section';
import MovieList from 'components/MovieList';
import { fetchTrendingMovies } from 'api/movie-db';

function HomePage() {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [ref, inView] = useInView({
    initialInView: true,
    rootMargin: '1200px',
  });

  useEffect(() => {
    if (!inView) return;

    fetchTrendingMovies(page).then(newMovies => {
      setMovies(movies => [...movies, ...newMovies]);
      setPage(page => page + 1);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <main>
      {movies.length > 0 && (
        <Section title='Trending today'>
          <MovieList movies={movies} />
        </Section>
      )}

      <div ref={ref}></div>
    </main>
  );
}

export default HomePage;
