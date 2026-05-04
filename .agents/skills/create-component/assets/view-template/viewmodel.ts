import { useAuth } from '@context/AuthContext';
import { useState } from 'react';

export const useViewModel = () => {
  const { session } = useAuth();
  // const route = useRoute<RouteProp<RootParamsList, ScreenType.EXAMPLE>>();

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  return { loading, data };
};
