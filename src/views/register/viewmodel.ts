import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { AuthStackParamList } from '../../navigation/types';

type RegisterNavProp = NativeStackNavigationProp<
  AuthStackParamList,
  'Register'
>;

export const useViewModel = () => {
  const navigation = useNavigation<RegisterNavProp>();

  const goToLogin = () => navigation.goBack();

  return { goToLogin };
};
