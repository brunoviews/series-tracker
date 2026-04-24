import { ItemStatus, UserMovie } from '@/types/app.types';
import { useState } from 'react';

export const useViewModel = (userMovies: UserMovie[]) => {
  const [activeStatus, setActiveStatus] = useState<ItemStatus>(
    ItemStatus.Watching,
  );

  const filteredMovies = userMovies.filter((m) => m.status === activeStatus);
  const sortByRecentAdded = filteredMovies.sort(
    (a, b) =>
      new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
  );

  return { sortByRecentAdded, activeStatus, setActiveStatus };
};
