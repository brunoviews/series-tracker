import type { UserSeries } from '@/types/database.types';

export type MoviesListProps = {
  userMovies: UserSeries[];
  isLoading: boolean;
};
