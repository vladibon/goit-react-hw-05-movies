import { useState, useEffect } from 'react';
import { Section } from 'components/Section/Section';
import { MovieList } from 'components/MovieList';
import { PageControls } from 'components/PageControls';
import { fetchTrendingMovies } from 'api/movie-db';

function HomePage() {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(null);

  const isLastPage = page === totalPages;

  useEffect(() => {
    fetchTrendingMovies(page).then(({ results, total_pages }) => {
      setMovies(results);
      setTotalPages(total_pages);
    });
  }, [page]);

  return (
    <main>
      {movies.length > 0 && (
        <Section title='Trending today'>
          <MovieList movies={movies} />

          <PageControls
            page={page}
            isLastPage={isLastPage}
            setNextPage={step => setPage(page => page + step)}
          />
        </Section>
      )}
    </main>
  );
}

export { HomePage };
