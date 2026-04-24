import { ScreenType, type TabParamsList } from '../../navigation/types';
import { ItemStatus } from '@/types/app.types';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

export { ItemStatus as SeriesStatus }; // valor, no `export type` — es un enum

export type HomeViewProps = BottomTabScreenProps<
  TabParamsList,
  ScreenType.HOME
>;
