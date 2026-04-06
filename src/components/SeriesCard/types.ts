import type { SeriesStatus } from '@/types/database.types';

export type SeriesCardProps = {
  series_name: string;
  poster_path: string | null;
  status: SeriesStatus;
  rating: number | null;
  current_season: number | null;
  current_episode: number | null;
  id: number;
  type: 'series' | 'movie';
};
