import type { RootParamsList } from '@/navigation/types';
import type { ScreenType } from '@/navigation/types';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type DetailViewProps = NativeStackScreenProps<
  RootParamsList,
  ScreenType.DETAIL
>;
