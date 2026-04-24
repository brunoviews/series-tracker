import { TmdbMovie, TmdbSeries } from '@/lib/tmdb';
import { ItemStatus } from '@/types/app.types';

export type AddShowModalProps = {
  isOpen: boolean;
  onConfirm?: (status: ItemStatus, rating?: number | null) => void;
  onRemove?: () => void;
  onCancel?: () => void;
  isLoading?: boolean;
  isRemoving?: boolean;
  item: TmdbSeries | TmdbMovie | null;
  initialStatus?: ItemStatus | null;
  initialRating?: number | null;
};
