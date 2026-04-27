import { useSeries } from '@/context/SeriesContext';

export const useViewModel = () => {
  const { userSeries, loading } = useSeries();

  return {
    userSeries,
    loading,
  };
};
