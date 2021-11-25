import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchForm from 'components/SearchForm';
import Section from 'components/Section/Section';
import MovieList from 'components/MovieList';
import PageControls from 'components/PageControls';
import { fetchSearchedMovies } from 'api/movie-db';

function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query');
  const page = searchParams.get('page');
  const isLastPage = Number(page) === totalPages;

  useEffect(() => {
    if (!query) return;
    if (!page) return setSearchParams({ query, page: 1 });

    fetchSearchedMovies({ query, page }).then(({ results, total_pages }) => {
      setMovies(results);
      setTotalPages(total_pages);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, page]);

  const handleSubmit = newQuery => {
    if (newQuery === query) return;

    setSearchParams({ query: newQuery, page: 1 });
  };

  const handleClick = step =>
    setSearchParams({ query, page: Number(page) + step });

  return (
    <main>
      <SearchForm onSubmit={handleSubmit} />

      {movies.length > 0 && (
        <Section title='Movies'>
          <MovieList movies={movies} />

          <PageControls
            page={Number(page)}
            setPage={handleClick}
            isLastPage={isLastPage}
          />
        </Section>
      )}
    </main>
  );
}

export default MoviesPage;
