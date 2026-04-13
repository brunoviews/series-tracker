import { TmdbSeries } from '@/lib/tmdb';
import { UserSeries } from '@/types/database.types';

export type SearchResultCardProps = {
  serie: TmdbSeries;
  onAdd: () => void;
  userSeriesMap: Record<number, UserSeries>;
  id: number;
};
