import { addUserSeries, getUserSeries } from '@/services/userSeries';
import { SeriesStatus } from '@/types/database.types';
import { useAuth } from '@context/AuthContext';
import type { TmdbSeries } from '@lib/tmdb';
import { getPosterUrl, searchSeries } from '@lib/tmdb';
import { useEffect, useState } from 'react';

export const useViewModel = () => {
  const { session } = useAuth();
  const [searchText, setSearchText] = useState('');
  const [results, setResults] = useState<TmdbSeries[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedSerie, setSelectedSerie] = useState<TmdbSeries | null>(null);
  const [userSeriesMap, setUserSeriesMap] = useState<
    Record<number, SeriesStatus>
  >({});

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
      await addUserSeries({
        user_id: session.user.id,
        tmdb_series_id: selectedSerie.id,
        series_name: selectedSerie.name,
        poster_path: selectedSerie.poster_path,
        status,
      });
      setUserSeriesMap((prev) => ({
        ...prev,
        [selectedSerie.id]: status,
      }));
      closeModal();
    } catch (e) {
      console.error('Error añadiendo serie:', e);
    } finally {
      setIsAdding(false);
    }
  };

  useEffect(() => {
    // Si el texto está vacío, limpia los resultados y no hagas nada más
    if (searchText.trim() === '') {
      setResults([]);
      return;
    }

    // Crea un temporizador que espera 500ms antes de llamar a la API
    const timer = setTimeout(async () => {
      // TODO: pon isLoading a true
      setIsLoading(true);
      // TODO: pon error a null
      setError(null);

      try {
        const data = await searchSeries(searchText);
        // Convertimos el poster_path relativo a URL completa
        setResults(
          data.map((item) => ({
            ...item,
            poster_path: getPosterUrl(item.poster_path),
          })),
        );
      } catch (e) {
        // TODO: guarda el mensaje de error en el estado
        console.log(`Error buscando series: ${e}`);
        setError((e as Error).message);
      } finally {
        // TODO: pon isLoading a false
        setIsLoading(false);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [searchText]);

  useEffect(() => {
    if (!session?.user.id) return;

    const fetchUserSeries = async () => {
      try {
        const data = await getUserSeries(session.user.id);
        const map: Record<number, SeriesStatus> = {};
        data.forEach((item) => {
          map[item.tmdb_series_id] = item.status;
        });
        setUserSeriesMap(map);
      } catch (error) {
        console.error('Error fetching user series:', error);
        return;
      }
    };
    fetchUserSeries();
  }, [ session?.user.id]);

  return {
    searchText,
    setSearchText,
    results,
    isLoading,
    isAdding,
    error,
    isModalOpen,
    openModal,
    closeModal,
    selectedSerie,
    addSeries,
    userSeriesMap,
  };
};
