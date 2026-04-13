import { TmdbMovie, TmdbSeries } from '@/lib/tmdb';
import { SeriesStatus } from '@/types/database.types';

export type AddShowModalProps = {
  isOpen: boolean;
  onConfirm?: (status: SeriesStatus, rating?: number | null) => void;
  onRemove?: () => void;
  onCancel?: () => void;
  isLoading?: boolean;
  isRemoving?: boolean;
  item: TmdbSeries | TmdbMovie | null;
  initialStatus?: SeriesStatus | null;
  initialRating?: number | null;
};
