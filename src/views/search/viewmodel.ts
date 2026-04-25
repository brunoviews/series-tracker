import { useMovies } from '@/context/MoviesContext';
import { useSeries } from '@/context/SeriesContext';
import { ItemStatus } from '@/types/app.types';
import { useAuth } from '@context/AuthContext';
import type { SearchResult } from '@lib/tmdb';
import {
  getMovieById,
  getSerieById,
  searchMovies,
  searchSeries,
} from '@lib/tmdb';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export const useViewModel = () => {
  const { session } = useAuth();
  const { t } = useTranslation();
  const {
    userSeriesMap,
    addSeries: addSeriesContext,
    deleteSeries,
  } = useSeries();
  const { userMoviesMap, addMovie: addMovieContext, deleteMovie } = useMovies();
  const [searchText, setSearchText] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [isRemoving, setIsRemoving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<SearchResult | null>(null);
  const [snackMessage, setSnackMessage] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isRemovingSnack, setIsRemovingSnack] = useState(false);
  const [mediaType, setMediaType] = useState<'series' | 'movie'>('series');

  const clearSnackMessage = () => {
    setSnackMessage(null);
    setIsSuccess(false);
    setIsRemovingSnack(false);
  };

  const openModal = (item: SearchResult) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setIsModalOpen(false);
    setError(null);
  };

  // Series handlers
  const addSeries = async (status: ItemStatus, rating?: number | null) => {
    if (!selectedItem || !session?.user.id) return;
    if (selectedItem.media_type !== 'series') return;
    setIsAdding(true);
    try {
      // Fetch details to get number of seasons/episodes and vote average at the time of adding
      const details = await getSerieById(selectedItem.id);
      await addSeriesContext({
        user_id: session.user.id,
        tmdb_series_id: selectedItem.id,
        series_name: selectedItem.name,
        poster_path: selectedItem.poster_path,
        vote_average: details?.vote_average ?? null,
        number_of_seasons: details?.number_of_seasons ?? null,
        number_of_episodes: details?.number_of_episodes ?? null,
        rating: rating ?? null,
        status,
      });
      setIsSuccess(true);
      setSnackMessage(t('commonSuccess.Series.Added'));
      closeModal();
    } catch (e) {
      console.error('Error añadiendo serie:', e);
      setSnackMessage(t('commonErrors.Series.AddingError'));
    } finally {
      setIsAdding(false);
    }
  };

  const removeSeries = async () => {
    if (!selectedItem) return;
    setIsRemoving(true);
    try {
      await deleteSeries(selectedItem.id);
      setIsRemovingSnack(true);
      setSnackMessage(t('commonSuccess.Series.Removed'));
      closeModal();
    } catch (e) {
      console.error('Error eliminando serie:', e);
      setSnackMessage(t('commonErrors.Series.RemovingError'));
    } finally {
      setIsRemoving(false);
    }
  };

  // movies handlers
  const addMovie = async (status: ItemStatus, rating?: number | null) => {
    if (!selectedItem || !session?.user.id) return;
    if (selectedItem.media_type !== 'movie') return;
    setIsAdding(true);
    try {
      const details = await getMovieById(selectedItem.id);
      await addMovieContext({
        user_id: session.user.id,
        tmdb_movie_id: selectedItem.id,
        movie_name: selectedItem.title,
        poster_path: selectedItem.poster_path,
        vote_average: selectedItem.vote_average ?? null,
        runtime: details.runtime ?? null, // TMDB no devuelve el runtime en el resultado de búsqueda, y no queremos hacer otra llamada para obtenerlo
        rating: rating ?? null,
        status,
      });
      setIsSuccess(true);
      setSnackMessage(t('commonSuccess.Movie.Added'));
      closeModal();
    } catch (e) {
      console.error('Error añadiendo película:', e);
      setSnackMessage(t('commonErrors.Movie.AddingError'));
    } finally {
      setIsAdding(false);
    }
  };

  const removeMovie = async () => {
    if (!selectedItem) return;
    setIsRemoving(true);
    try {
      await deleteMovie(selectedItem.id);
      setIsRemovingSnack(true);
      setSnackMessage(t('commonSuccess.Movie.Removed'));
      closeModal();
    } catch (e) {
      console.error('Error eliminando película:', e);
      setSnackMessage(t('commonErrors.Movie.RemovingError'));
    } finally {
      setIsRemoving(false);
    }
  };

  useEffect(() => {
    if (searchText.trim() === '') {
      setResults([]);
      return;
    }

    const timer = setTimeout(async () => {
      setIsLoading(true);
      setError(null);

      try {
        const data =
          mediaType === 'series'
            ? await searchSeries(searchText)
            : await searchMovies(searchText);
        setResults(data);
      } catch (e) {
        console.log(`Error buscando series: ${e}`);
        setError(t('commonErrors.Series.SearchingError'));
      } finally {
        setIsLoading(false);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [searchText, mediaType, t]);

  return {
    searchText,
    setSearchText,
    results,
    isLoading,
    isAdding,
    isRemoving,
    error,
    isModalOpen,
    openModal,
    closeModal,
    selectedItem,
    mediaType,
    setMediaType,
    addSeries,
    addMovie,
    removeSeries,
    removeMovie,
    userSeriesMap,
    userMoviesMap,
    snackMessage,
    isSuccess,
    isRemovingSnack,
    clearSnackMessage,
  };
};
