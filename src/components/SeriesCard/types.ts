import { ItemStatus } from '@/types/app.types';

export type SeriesCardProps = {
  series_name: string;
  poster_path: string | null;
  status: ItemStatus;
  rating: number | null;
  number_of_seasons?: number | null;
  number_of_episodes?: number | null;
  vote_average: number | null;
  runtime?: number | null;
  id: number;
  type: 'series' | 'movie';
};
