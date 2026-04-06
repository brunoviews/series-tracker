import { useAuth } from '@/context/AuthContext';
import { useSeries } from '@/context/SeriesContext';
import type { InsertUserSeries } from '@/types/database.types';
import { SeriesStatus } from '@/types/database.types';
import type { TmdbMovieDetail, TmdbSeriesDetail } from '@lib/tmdb';
import {
  getBackdropUrl,
  getMovieById,
  getPosterUrl,
  getSerieById,
} from '@lib/tmdb';
import { useEffect, useState } from 'react';

export const useViewModel = (tmdbId: number, type: 'series' | 'movie') => {
  const { userSeriesMap, addSeries } = useSeries();
  const { session } = useAuth();
  const [detail, setDetail] = useState<
    TmdbSeriesDetail | TmdbMovieDetail | null
  >(null);
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

  const userStatus = userSeriesMap[tmdbId] ?? null;

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  const handleAddSeries = async (status: SeriesStatus) => {
    if (!detail || !session?.user.id) return;
    setIsAdding(true);
    try {
      const name =
        type === 'series'
          ? (detail as TmdbSeriesDetail).name
          : (detail as TmdbMovieDetail).title;
      const data: InsertUserSeries = {
        user_id: session.user.id,
        tmdb_series_id: tmdbId,
        series_name: name,
        poster_path: detail.poster_path ?? null,
        status,
      };
      await addSeries(data);
      closeModal();
    } finally {
      setIsAdding(false);
    }
  };

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const data =
          type === 'series'
            ? await getSerieById(tmdbId)
            : await getMovieById(tmdbId);
        setDetail(data);
      } catch (e) {
        console.error('Error cargando detalle:', e);
      } finally {
        setLoading(false);
      }
    };
    fetchDetail();
  }, [tmdbId, type]);

  // Campos normalizados para que la vista no tenga que lidiar con type
  const title = detail
    ? type === 'series'
      ? (detail as TmdbSeriesDetail).name
      : (detail as TmdbMovieDetail).title
    : null;

  const year = detail
    ? type === 'series'
      ? (detail as TmdbSeriesDetail).first_air_date?.slice(0, 4)
      : (detail as TmdbMovieDetail).release_date?.slice(0, 4)
    : null;

  const posterUrl = detail ? getPosterUrl(detail.poster_path) : null;
  const backdropUrl = detail ? getBackdropUrl(detail.backdrop_path) : null;
  const cast = detail?.credits?.cast.slice(0, 10) ?? [];

  return {
    detail,
    loading,
    userStatus,
    type,
    title,
    year,
    posterUrl,
    backdropUrl,
    cast,
    modalVisible,
    isAdding,
    openModal,
    closeModal,
    handleAddSeries,
  };
};
