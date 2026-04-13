import { useSeries } from '@/context/SeriesContext';
import { SeriesStatus } from '@/types/database.types';
import { useAuth } from '@context/AuthContext';
import type { TmdbSeries } from '@lib/tmdb';
import { getSerieById, searchSeries } from '@lib/tmdb';
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
  const [searchText, setSearchText] = useState('');
  const [results, setResults] = useState<TmdbSeries[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [isRemoving, setIsRemoving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedSerie, setSelectedSerie] = useState<TmdbSeries | null>(null);
  const [snackMessage, setSnackMessage] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isRemovingSnack, setIsRemovingSnack] = useState(false);

  const clearSnackMessage = () => {
    setSnackMessage(null);
    setIsSuccess(false);
    setIsRemovingSnack(false);

  };

  const openModal = (serie: TmdbSeries) => {
    setSelectedSerie(serie);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedSerie(null);
    setIsModalOpen(false);
    setError(null);
  };

  const addSeries = async (status: SeriesStatus, rating?: number | null) => {
    if (!selectedSerie || !session?.user.id) return;
    setIsAdding(true);
    try {
      // Fetch details to get number of seasons/episodes and vote average at the time of adding
      const details = await getSerieById(selectedSerie.id);
      await addSeriesContext({
        user_id: session.user.id,
        tmdb_series_id: selectedSerie.id,
        series_name: selectedSerie.name,
        poster_path: selectedSerie.poster_path,
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
    if (!selectedSerie) return;
    setIsRemoving(true);
    try {
      await deleteSeries(selectedSerie.id);
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

  useEffect(() => {
    if (searchText.trim() === '') {
      setResults([]);
      return;
    }

    const timer = setTimeout(async () => {
      setIsLoading(true);
      setError(null);

      try {
        const data = await searchSeries(searchText);
        setResults(data);
      } catch (e) {
        console.log(`Error buscando series: ${e}`);
        setError(t('commonErrors.Series.SearchingError'));
      } finally {
        setIsLoading(false);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [searchText, t]);

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
    selectedSerie,
    addSeries,
    removeSeries,
    userSeriesMap,
    snackMessage,
    isSuccess,
    isRemovingSnack,
    clearSnackMessage,
  };
};
