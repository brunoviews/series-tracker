import {
  getTrendingMovies,
  getTrendingSeries,
  type TmdbMovie,
  type TmdbSeries,
} from '@/lib/tmdb';
import { useCallback, useEffect, useMemo, useState } from 'react';

export const useViewModel = () => {
  const [trendingMovies, setTrendingMovies] = useState<TmdbMovie[]>([]);
  const [trendingSeries, setTrendingSeries] = useState<TmdbSeries[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    try {
      setError(null);
      setIsLoading(true);

      const [movies, series] = await Promise.all([
        getTrendingMovies('week'),
        getTrendingSeries('week'),
      ]);

      setTrendingMovies(movies);
      setTrendingSeries(series);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Unknown error');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const hero = useMemo(() => {
    const movie = trendingMovies[0];
    if (movie) {
      return { id: movie.id, type: 'movie' as const, item: movie };
    }
    const serie = trendingSeries[0];
    if (serie) {
      return { id: serie.id, type: 'series' as const, item: serie };
    }
    return null;
  }, [trendingMovies, trendingSeries]);

  return {
    hero,
    trendingMovies,
    trendingSeries,
    isLoading,
    error,
    reload: load,
  };
};
