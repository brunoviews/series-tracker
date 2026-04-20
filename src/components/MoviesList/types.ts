import { UserMovie } from '@/types/app.types';

export type MoviesListProps = {
  userMovies: UserMovie[];
  isLoading: boolean;
};
