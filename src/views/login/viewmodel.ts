import { useCallback, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ScreenType, type RootParamsList } from '../../navigation/types';
import { supabase } from '../../lib/supabase';
import i18n from '../../i18n';

type LoginNavProp = NativeStackNavigationProp<RootParamsList, ScreenType.LOGIN>;

export const useViewModel = () => {
  const navigation = useNavigation<LoginNavProp>();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const goToRegister = useCallback(() => {
    navigation.navigate(ScreenType.REGISTER);
  }, [navigation]);

  const signIn = async () => {
    setError(null);
    setLoading(true);

    const { error: authError } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password,
    });

    setLoading(false);

    if (authError) {
      if (authError.message.includes('Invalid login credentials')) {
        setError(i18n.t('auth.errors.invalidCredentials'));
      } else {
        setError(i18n.t('auth.errors.generic'));
      }
      return;
    }

    // Si no hay error, onAuthStateChange en AuthContext detecta la nueva sesión
    // y AppNavigator navega automáticamente a las tabs. No hay que hacer nada aquí.
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    loading,
    error,
    signIn,
    goToRegister,
  };
};
