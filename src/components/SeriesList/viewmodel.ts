import { ItemStatus, UserSeries } from '@/types/app.types';
import { useState } from 'react';

export const useViewModel = (userSeries: UserSeries[]) => {
  const [activeStatus, setActiveStatus] = useState<ItemStatus>(
    ItemStatus.Watching,
  );
  const filteredSeries = userSeries.filter((s) => s.status === activeStatus);
  const sortByRecentAdded = filteredSeries.sort(
    (a, b) =>
      new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
  );
  return { sortByRecentAdded, activeStatus, setActiveStatus };
};
