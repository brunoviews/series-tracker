import { useAuth } from '@/context/AuthContext';
import { useSeries } from '@/context/SeriesContext';
import { supabase } from '@/lib/supabase';
import { ScreenType, TabParamsList } from '@/navigation/types';
import { SeriesStatus } from '@/types/database.types';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import { useCallback, useEffect, useState } from 'react';

const getGreetingKey = (): 'morning' | 'afternoon' | 'evening' => {
  const hour = new Date().getHours();
  if (hour < 12) return 'morning';
  if (hour < 20) return 'afternoon';
  return 'evening';
};

export const useViewModel = () => {
  const { session } = useAuth();
  const { userSeries } = useSeries();
  const [activeStatus, setActiveStatus] = useState<SeriesStatus>(
    SeriesStatus.Watching,
  );

  const [isLoading, setIsLoading] = useState(true);
  const [firstName, setFirstName] = useState<string | null>(null);
  const navigation = useNavigation<BottomTabNavigationProp<TabParamsList>>();

  const handleAddSeries = useCallback(() => {
    navigation.navigate(ScreenType.SEARCH);
  }, [navigation]);

  useEffect(() => {
    if (!session?.user?.id) return;

    const fetchProfile = async () => {
      setIsLoading(true);
      const { data, error } = await supabase
        .from('profiles')
        .select('first_name')
        .eq('id', session.user.id)
        .single();

      if (!error && data) {
        setFirstName(data.first_name);
      }
      setIsLoading(false);
    };

    fetchProfile();
  }, [session?.user?.id]);

  const greetingKey = getGreetingKey();
  const filteredSeries = userSeries.filter((s) => s.status === activeStatus);

  const statusCountMap: Record<SeriesStatus, number> = {
    [SeriesStatus.Watching]: userSeries.filter(
      (s) => s.status === SeriesStatus.Watching,
    ).length,
    [SeriesStatus.Completed]: userSeries.filter(
      (s) => s.status === SeriesStatus.Completed,
    ).length,
    [SeriesStatus.Planned]: userSeries.filter(
      (s) => s.status === SeriesStatus.Planned,
    ).length,
    [SeriesStatus.Dropped]: userSeries.filter(
      (s) => s.status === SeriesStatus.Dropped,
    ).length,
  };

  return {
    firstName,
    greetingKey,
    activeStatus,
    setActiveStatus,
    filteredSeries,
    statusCountMap,
    handleAddSeries,
    isLoading,
  };
};
