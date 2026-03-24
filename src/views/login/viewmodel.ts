import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { AuthStackParamList } from '../../navigation/types';

type LoginNavProp = NativeStackNavigationProp<AuthStackParamList, 'Login'>;

export const useViewModel = () => {
  const navigation = useNavigation<LoginNavProp>();

  const goToRegister = () => navigation.navigate('Register');

  return { goToRegister };
};
