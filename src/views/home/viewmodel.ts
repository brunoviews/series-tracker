import type { HomeSeries, SeriesStatus } from './types';
import { useAuth } from '@/context/AuthContext';
import { supabase } from '@/lib/supabase';
import { ScreenType, TabParamsList } from '@/navigation/types';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import { useCallback, useEffect, useState } from 'react';

const MOCK_SERIES: HomeSeries[] = [
  {
    id: '1',
    series_name: 'The Bear',
    poster_path: null,
    status: 'watching',
    rating: 4.8,
    current_season: 2,
    current_episode: 5,
  },
  {
    id: '2',
    series_name: 'Severance',
    poster_path: null,
    status: 'completed',
    rating: 4.9,
    current_season: 1,
    current_episode: 9,
  },
  {
    id: '3',
    series_name: 'The Last of Us',
    poster_path: null,
    status: 'watching',
    rating: 4.7,
    current_season: 1,
    current_episode: 3,
  },
  {
    id: '4',
    series_name: 'Succession',
    poster_path: null,
    status: 'completed',
    rating: 5.0,
    current_season: 4,
    current_episode: 10,
  },
  {
    id: '5',
    series_name: 'The White Lotus',
    poster_path: null,
    status: 'planned',
    rating: null,
    current_season: null,
    current_episode: null,
  },
  {
    id: '5',
    series_name: 'The White Lotus',
    poster_path: null,
    status: 'dropped',
    rating: null,
    current_season: null,
    current_episode: null,
  },
];

const getGreetingKey = (): 'morning' | 'afternoon' | 'evening' => {
  const hour = new Date().getHours();
  if (hour < 12) return 'morning';
  if (hour < 20) return 'afternoon';
  return 'evening';
};

export const useViewModel = () => {
  const { session } = useAuth();
  const [activeStatus, setActiveStatus] = useState<SeriesStatus>('watching');
  const [firstName, setFirstName] = useState<string | null>(null);
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

    fetchProfile();
  }, [session?.user?.id]);

  const greetingKey = getGreetingKey();
  const filteredSeries = MOCK_SERIES.filter((s) => s.status === activeStatus);

  return {
    firstName,
    greetingKey,
    activeStatus,
    setActiveStatus,
    filteredSeries,
    handleAddSeries,
  };
};
