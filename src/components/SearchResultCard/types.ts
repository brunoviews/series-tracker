import { SearchResult } from '@/lib/tmdb';
import { UserSeries } from '@/types/app.types';

export type SearchResultCardProps = {
  item: SearchResult;
  onAdd: () => void;
  userSeriesMap: Record<number, UserSeries>;
  id: number;
};
