import { useMovies } from '@/context/MoviesContext';

export const useViewModel = () => {
  const { userMovies, isLoading } = useMovies();

  return {
    userMovies,
    isLoading,
  };
};
