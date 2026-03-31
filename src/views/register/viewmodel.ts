import i18n from '../../i18n';
import { supabase } from '../../lib/supabase';
import { type RootParamsList,ScreenType } from '../../navigation/types';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useState } from 'react';

type RegisterNavProp = NativeStackNavigationProp<
  RootParamsList,
  ScreenType.REGISTER
>;

export const useViewModel = () => {
  const navigation = useNavigation<RegisterNavProp>();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const goToLogin = () => navigation.goBack();

  const signUp = async () => {
    setError(null);
    setLoading(true);

    const { data, error: authError } = await supabase.auth.signUp({
      email: email.trim(),
      password,
    });

    if (authError) {
      setLoading(false);
      if (authError.message.includes('User already registered')) {
        setError(i18n.t('auth.errors.emailAlreadyExists'));
      } else {
        setError(i18n.t('auth.errors.generic'));
      }
      return;
    }

    if (data.user) {
      await supabase
        .from('profiles')
        .update({ first_name: firstName.trim(), last_name: lastName.trim() })
        .eq('id', data.user.id);
    }

    setLoading(false);
    // onAuthStateChange emite SIGNED_IN y AppNavigator navega a las tabs.
  };

  return {
    firstName,
    setFirstName,
    lastName,
    setLastName,
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
