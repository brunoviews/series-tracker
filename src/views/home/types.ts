import { ScreenType, type TabParamsList } from '../../navigation/types';
import { SeriesStatus } from '@/types/database.types';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

export { SeriesStatus }; // valor, no `export type` — es un enum

export type HomeViewProps = BottomTabScreenProps<
  TabParamsList,
  ScreenType.HOME
>;

