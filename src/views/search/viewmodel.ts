import { useSeries } from '@/context/SeriesContext';
import { SeriesStatus } from '@/types/database.types';
import { useAuth } from '@context/AuthContext';
import type { TmdbSeries } from '@lib/tmdb';
import { searchSeries } from '@lib/tmdb';
import { useEffect, useState } from 'react';

export const useViewModel = () => {
  const { session } = useAuth();
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

  const openModal = (serie: TmdbSeries) => {
    setSelectedSerie(serie);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedSerie(null);
    setIsModalOpen(false);
  };

  const addSeries = async (status: SeriesStatus) => {
    if (!selectedSerie || !session?.user.id) return;

    setIsAdding(true);
    try {
      await addSeriesContext({
        user_id: session.user.id,
        tmdb_series_id: selectedSerie.id,
        series_name: selectedSerie.name,
        poster_path: selectedSerie.poster_path,
        status,
      });
      closeModal();
    } catch (e) {
      console.error('Error añadiendo serie:', e);
    } finally {
      setIsAdding(false);
    }
  };

  const removeSeries = async () => {
    if (!selectedSerie) return;
    setIsRemoving(true);
    try {
      await deleteSeries(selectedSerie.id);
      closeModal();
    } catch (e) {
      console.error('Error eliminando serie:', e);
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
        setError((e as Error).message);
      } finally {
        setIsLoading(false);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [searchText]);

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
  };
};
