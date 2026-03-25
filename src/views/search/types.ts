import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { ScreenType, type TabParamsList } from '../../navigation/types';

export type SearchViewProps = BottomTabScreenProps<TabParamsList, ScreenType.SEARCH>;
