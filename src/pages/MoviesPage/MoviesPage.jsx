import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchForm } from 'components/SearchForm';
import { Section } from 'components/Section/Section';
import { MovieList } from 'components/MovieList';
import { PageControls } from 'components/PageControls';
import { fetchSearchedMovies } from 'api/movie-db';

function MoviesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(null);

  const query = searchParams.get('query');
  const page = searchParams.get('page');
  const isLastPage = Number(page) === totalPages;

  useEffect(() => {
    if (!query) return;

    fetchSearchedMovies({ query, page }).then(({ results, total_pages }) => {
      setMovies(results);
      setTotalPages(total_pages);
    });
  }, [query, page]);

  const handleSubmit = newQuery => {
    if (newQuery === query) return;

    setSearchParams({ query: newQuery, page: 1 });
  };

  return (
    <main>
      <SearchForm onSubmit={handleSubmit} />

      {movies.length > 0 && (
        <Section title='Movies'>
          <MovieList movies={movies} />

          <PageControls
            page={Number(page)}
            isLastPage={isLastPage}
            setNextPage={step =>
              setSearchParams({ query, page: Number(page) + step })
            }
          />
        </Section>
      )}
    </main>
  );
}

export { MoviesPage };
