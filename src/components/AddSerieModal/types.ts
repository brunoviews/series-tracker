import { TmdbMovie, TmdbSeries } from '@/lib/tmdb';
import { SeriesStatus } from '@/types/database.types';

export type AddSerieModalProps = {
  isOpen: boolean;
  onConfirm?: (status: SeriesStatus) => void;
  onCancel?: () => void;
  isLoading?: boolean;
  item: TmdbSeries | TmdbMovie | null;
};
