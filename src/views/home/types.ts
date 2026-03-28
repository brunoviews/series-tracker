import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { ScreenType, type TabParamsList } from '../../navigation/types';
import type { SeriesStatus } from '@/types/database.types';

export type { SeriesStatus };

export type HomeViewProps = BottomTabScreenProps<
  TabParamsList,
  ScreenType.HOME
>;

export type HomeSeries = {
  id: string;
  series_name: string;
  poster_path: string | null;
  status: SeriesStatus;
  rating: number | null;
  current_season: number | null;
  current_episode: number | null;
};
