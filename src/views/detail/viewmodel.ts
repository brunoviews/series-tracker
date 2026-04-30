import { useAuth } from '@/context/AuthContext';
import { useMovies } from '@/context/MoviesContext';
import { useSeries } from '@/context/SeriesContext';
import type { InsertUserMovie, InsertUserSeries } from '@/types/app.types';
import { ItemStatus } from '@/types/app.types';
import type { TmdbMovieDetail, TmdbSeriesDetail } from '@lib/tmdb';
import {
  getBackdropUrl,
  getMovieById,
  getPosterUrl,
  getSerieById,
} from '@lib/tmdb';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export const useViewModel = (tmdbId: number, type: 'series' | 'movie') => {
  const { userSeriesMap, addSeries, deleteSeries } = useSeries();
  const { userMoviesMap, addMovie, deleteMovie } = useMovies();
  const { session } = useAuth();
  const { t } = useTranslation();
  const [detail, setDetail] = useState<
    TmdbSeriesDetail | TmdbMovieDetail | null
  >(null);
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [isRemoving, setIsRemoving] = useState(false);
  const [snackMessage, setSnackMessage] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isRemovingSnack, setIsRemovingSnack] = useState(false);

  const userStatus =
    type === 'series'
      ? (userSeriesMap[tmdbId]?.status ?? null)
      : (userMoviesMap[tmdbId]?.status ?? null);

  const clearSnackMessage = () => {
    setSnackMessage(null);
    setIsSuccess(false);
    setIsRemovingSnack(false);
  };
  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  const handleAddSeries = async (
    status: ItemStatus,
    rating?: number | null,
  ) => {
    if (!detail || !session?.user.id) return;
    setIsAdding(true);
    setSnackMessage(null);
    try {
      if (type === 'series') {
        const seriesDetail = detail as TmdbSeriesDetail;
        const data: InsertUserSeries = {
          user_id: session.user.id,
          tmdb_series_id: tmdbId,
          series_name: seriesDetail.name,
          poster_path: detail.poster_path ?? null,
          vote_average: detail.vote_average ?? null,
          rating: rating ?? null,
          number_of_seasons: seriesDetail.number_of_seasons,
          number_of_episodes: seriesDetail.number_of_episodes,
          status,
        };
        await addSeries(data);
        setSnackMessage(t('commonSuccess.Series.Added'));
      } else {
        const movieDetail = detail as TmdbMovieDetail;
        const data: InsertUserMovie = {
          user_id: session.user.id,
          tmdb_movie_id: tmdbId,
          movie_name: movieDetail.title,
          poster_path: detail.poster_path ?? null,
          vote_average: detail.vote_average ?? null,
          runtime: movieDetail.runtime ?? null,
          rating: rating ?? null,
          status,
        };
        await addMovie(data);
        setSnackMessage(t('commonSuccess.Movie.Added'));
      }
      setIsSuccess(true);
      closeModal();
    } catch (error) {
      closeModal();
      console.error('Error al añadir:', error);
      setSnackMessage(
        type === 'series'
          ? t('commonErrors.Series.AddingError')
          : t('commonErrors.Movie.AddingError'),
      );
    } finally {
      setIsAdding(false);
    }
  };

  const handleRemoveSeries = async () => {
    setIsRemoving(true);
    setSnackMessage(null);
    try {
      if (type === 'series') {
        await deleteSeries(tmdbId);
        setSnackMessage(t('commonSuccess.Series.Removed'));
      } else {
        await deleteMovie(tmdbId);
        setSnackMessage(t('commonSuccess.Movie.Removed'));
      }
      setIsRemovingSnack(true);
      closeModal();
    } catch (error) {
      console.error('Error al eliminar:', error);
      setSnackMessage(
        type === 'series'
          ? t('commonErrors.Series.RemovingError')
          : t('commonErrors.Movie.RemovingError'),
      );
    } finally {
      setIsRemoving(false);
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
    isRemoving,
    openModal,
    closeModal,
    handleAddSeries,
    handleRemoveSeries,
    //error handling
    snackMessage,
    clearSnackMessage,
    isSuccess,
    isRemovingSnack,
    userMoviesMap,
    userSeriesMap,
  };
};
