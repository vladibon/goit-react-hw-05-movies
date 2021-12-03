import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useQuery, useQueryClient } from 'react-query';
import SearchForm from 'components/SearchForm';
import Section from 'components/Section/Section';
import MovieList from 'components/MovieList';
import PageControls from 'components/PageControls';
import Loading from 'components/Loading';
import NotFound from 'components/NotFound';
import { fetchSearchedMovies } from 'api/movie-db';

function MoviesPage() {
  const queryClient = useQueryClient();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const page = Number(searchParams.get('page'));

  const { data, error, isLoading, isError, isSuccess } = useQuery(
    ['movies', query, page],
    () => fetchSearchedMovies({ query, page }),
    { enabled: !!query && !!page, keepPreviousData: true, staleTime: 60000 },
  );

  const isLastPage = page === data?.total_pages;

  useEffect(() => {
    if (!query || isLastPage) return;

    queryClient.prefetchQuery(
      ['movies', query, page + 1],
      () => fetchSearchedMovies({ query, page: page + 1 }),
      { keepPreviousData: true, staleTime: 60000 },
    );
  }, [query, page, isLastPage, queryClient]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [data]);

  const handleSubmit = newQuery => {
    if (newQuery === query) return;

    setSearchParams({ query: newQuery, page: 1 });
  };

  const handleClick = step => setSearchParams({ query, page: page + step });

  return (
    <main>
      <SearchForm onSubmit={handleSubmit} />

      {isLoading && <Loading />}
      {isError && <NotFound message={error.message} />}
      {isSuccess && (
        <Section title='Movies'>
          <MovieList movies={data.results} />

          <PageControls
            page={page}
            setPage={handleClick}
            isLastPage={isLastPage}
          />
        </Section>
      )}
    </main>
  );
}

export default MoviesPage;
