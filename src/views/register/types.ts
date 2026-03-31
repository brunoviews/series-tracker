import { RootParamsList, ScreenType } from '@/navigation/types';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RegisterViewProps = NativeStackScreenProps<
  RootParamsList,
  ScreenType.REGISTER
>;
