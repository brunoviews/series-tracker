import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ScreenType, type RootParamsList } from '../../navigation/types';

type RegisterNavProp = NativeStackNavigationProp<RootParamsList, ScreenType.REGISTER>;

export const useViewModel = () => {
  const navigation = useNavigation<RegisterNavProp>();

  const goToLogin = () => navigation.goBack();

  return { goToLogin };
};
