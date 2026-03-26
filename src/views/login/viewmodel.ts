import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ScreenType } from '../../navigation/types';
import { useAppNavigation } from '../../navigation/useAppNavigation';
import { supabase } from '../../lib/supabase';

export const useViewModel = () => {
  const navigation = useAppNavigation();
  const { t } = useTranslation();

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
        setError(t('auth.errors.invalidCredentials'));
      } else {
        setError(t('auth.errors.generic'));
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
