import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { ScreenType, type TabParamsList } from '../../navigation/types';

export type HomeViewProps = BottomTabScreenProps<TabParamsList, ScreenType.HOME>;
