import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ScreenType, type RootParamsList } from '../../navigation/types';
import { supabase } from '../../lib/supabase';
import i18n from '../../i18n';

type RegisterNavProp = NativeStackNavigationProp<
  RootParamsList,
  ScreenType.REGISTER
>;

export const useViewModel = () => {
  const navigation = useNavigation<RegisterNavProp>();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const goToLogin = () => navigation.goBack();

  const signUp = async () => {
    setError(null);
    setLoading(true);

    const { error: authError } = await supabase.auth.signUp({
      email: email.trim(),
      password,
    });

    setLoading(false);

    if (authError) {
      if (authError.message.includes('User already registered')) {
        setError(i18n.t('auth.errors.emailAlreadyExists'));
      } else {
        setError(i18n.t('auth.errors.generic'));
      }
      return;
    }

    // signUp exitoso: Supabase crea el usuario en auth.users,
    // el trigger handle_new_user crea el perfil en profiles,
    // onAuthStateChange emite SIGNED_IN y AppNavigator navega a las tabs.
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    loading,
    error,
    signUp,
    goToLogin,
  };
};
