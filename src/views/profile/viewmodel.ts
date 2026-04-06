import { useAuth } from '@/context/AuthContext';
import { useSeries } from '@/context/SeriesContext';
import { SeriesStatus } from '@/types/database.types';
import { useTranslation } from 'react-i18next';

export const useViewModel = () => {
  const { t } = useTranslation();
  const { signOut, userName, userEmail } = useAuth();
  const { userSeries } = useSeries();

  const userInitials = userName
    ? userName
        .split(' ')
        .map((word) => word[0])
        .join('')
        .toUpperCase()
        .slice(0, 2)
    : '??';

  // Contar el número de series por estado
  const watchingCount = userSeries.filter((s) => {
    return s.status === SeriesStatus.Watching;
  }).length;
  const completedCount = userSeries.filter((s) => {
    return s.status === SeriesStatus.Completed;
  }).length;
  const plannedCount = userSeries.filter((s) => {
    return s.status === SeriesStatus.Planned;
  }).length;
  const droppedCount = userSeries.filter((s) => {
    return s.status === SeriesStatus.Dropped;
  }).length;

  return {
    t,
    signOut,
    userName,
    userInitials,
    userEmail,
    watchingCount,
    completedCount,
    plannedCount,
    droppedCount,
  };
};
