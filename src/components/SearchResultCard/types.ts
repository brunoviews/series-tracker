import { SearchResult } from '@/lib/tmdb';
import { UserMovie, UserSeries } from '@/types/app.types';

export type SearchResultCardProps = {
  item: SearchResult;
  onAdd: () => void;
  userSeriesMap: Record<number, UserSeries>;
  userMoviesMap: Record<number, UserMovie>;
  id: number;
};
