import { useAuth } from '@/context/AuthContext';
import { supabase } from '@/lib/supabase';
import { ScreenType, TabParamsList } from '@/navigation/types';
import { getUserSeries } from '@/services/userSeries';
import { SeriesStatus, UserSeries } from '@/types/database.types';
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
  const [activeStatus, setActiveStatus] = useState<SeriesStatus>(
    SeriesStatus.Watching,
  );
  const [firstName, setFirstName] = useState<string | null>(null);
  const [userSeries, setUserSeries] = useState<UserSeries[]>([]);
  const navigation = useNavigation<BottomTabNavigationProp<TabParamsList>>();

  const handleAddSeries = useCallback(() => {
    navigation.navigate(ScreenType.SEARCH);
  }, [navigation]);

  useEffect(() => {
    if (!session?.user?.id) return;

    const fetchProfile = async () => {
      const { data, error } = await supabase
        .from('profiles')
        .select('first_name')
        .eq('id', session.user.id)
        .single();

      if (!error && data) {
        setFirstName(data.first_name);
      }
    };

    const fetchSeries = async () => {
      try {
        const data = await getUserSeries(session.user.id);
        setUserSeries(data);
      } catch (e) {
        console.error('Error cargando series:', e);
      }
    };

    fetchProfile();
    fetchSeries();
  }, [session?.user?.id]);



  const greetingKey = getGreetingKey();
  const filteredSeries = userSeries.filter((s) => s.status === activeStatus);

  return {
    firstName,
    greetingKey,
    activeStatus,
    setActiveStatus,
    filteredSeries,
    handleAddSeries,
  };
};
