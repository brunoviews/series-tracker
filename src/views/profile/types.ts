import { ScreenType, TabParamsList } from '@/navigation/types';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

export type ProfileViewProps = BottomTabScreenProps<
  TabParamsList,
  ScreenType.PROFILE
>;
