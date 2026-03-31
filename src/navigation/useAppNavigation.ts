import type { RootParamsList } from './types';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type AppNavigation = NativeStackNavigationProp<RootParamsList>;

export const useAppNavigation = () => useNavigation<AppNavigation>();
