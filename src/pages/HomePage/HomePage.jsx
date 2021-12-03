import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useQuery, useQueryClient } from 'react-query';
import Section from 'components/Section/Section';
import MovieList from 'components/MovieList';
import Loading from 'components/Loading';
import NotFound from 'components/NotFound';
import { fetchTrendingMovies } from 'api/movie-db';

function HomePage() {
  const queryClient = useQueryClient();
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [ref, inView] = useInView({
    initialInView: false,
    rootMargin: '400px',
  });

  const { data, error, isLoading, isError, isSuccess } = useQuery(
    ['movies', page],
    () => fetchTrendingMovies(page),
    { keepPreviousData: true, staleTime: 60000 },
  );

  const isLastPage = page === data?.total_pages;

  useEffect(() => {
    if (isLastPage) return;

    queryClient.prefetchQuery(
      ['movies', page + 1],
      () => fetchTrendingMovies(page + 1),
      { keepPreviousData: true, staleTime: 60000 },
    );
  }, [page, isLastPage, queryClient]);

  useEffect(() => {
    if (!inView || isLastPage) return;

    setPage(page => page + 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  useEffect(() => {
    data && setMovies(movies => [...movies, ...data?.results]);
  }, [data]);

  return (
    <main>
      {isLoading && <Loading />}
      {isError && <NotFound message={error.message} />}
      {isSuccess && (
        <Section title='Trending today'>
          <MovieList movies={movies} />

          <div ref={ref}></div>
        </Section>
      )}
    </main>
  );
}

export default HomePage;
