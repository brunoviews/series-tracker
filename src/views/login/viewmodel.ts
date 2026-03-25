import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ScreenType, type RootParamsList } from '../../navigation/types';

type LoginNavProp = NativeStackNavigationProp<RootParamsList, ScreenType.LOGIN>;

export const useViewModel = () => {
  const navigation = useNavigation<LoginNavProp>();

  const goToRegister = () => navigation.navigate(ScreenType.REGISTER);

  return { goToRegister };
};
