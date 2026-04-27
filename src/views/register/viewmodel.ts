import { type RegisterFormValues } from './schema';
import i18n from '@/i18n';
import { supabase } from '@/lib/supabase';
import { RootParamsList, ScreenType } from '@/navigation/types';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useState } from 'react';

type RegisterNavProp = NativeStackNavigationProp<
  RootParamsList,
  ScreenType.REGISTER
>;

export const useViewModel = () => {
  const navigation = useNavigation<RegisterNavProp>();
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const goToLogin = () => navigation.goBack();

  const signUp = async (values: RegisterFormValues): Promise<void> => {
    setSubmitError(null);
    setLoading(true);

    const { data, error: authError } = await supabase.auth.signUp({
      email: values.email.trim(),
      password: values.password,
    });

    if (authError) {
      setLoading(false);
      if (authError.message.includes('User already registered')) {
        setSubmitError(i18n.t('auth.errors.emailAlreadyExists'));
      } else {
        setSubmitError(i18n.t('auth.errors.generic'));
      }
      return;
    }

    if (data.user) {
      await supabase
        .from('profiles')
        .update({
          first_name: values.firstName.trim(),
          last_name: values.lastName.trim(),
        })
        .eq('id', data.user.id);
    }

    setLoading(false);
  };

  return {
    submitError,
    loading,
    signUp,
    goToLogin,
  };
};
