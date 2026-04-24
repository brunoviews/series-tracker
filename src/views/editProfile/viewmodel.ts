import { useAuth } from '@/context/AuthContext';
import { updateUser } from '@/services/user';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export const useViewModel = () => {
  const { t } = useTranslation();
  const {
    userName,
    userFirstName: initialFirstName,
    userLastName: initialLastName,
    session,
    refreshProfile,
  } = useAuth();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };

  useEffect(() => {
    setFirstName(initialFirstName || '');
    setLastName(initialLastName || '');
  }, [initialFirstName, initialLastName]);

  const onSave = async () => {
    if (!session?.user?.id) return;
    setError(null);
    setIsLoading(true);

    try {
      await updateUser(session?.user?.id, {
        first_name: firstName,
        last_name: lastName,
      });
      refreshProfile?.();
      setSuccess(t('editProfile.success'));
      setTimeout(() => navigation.goBack(), 1500);
    } catch (error) {
      console.error('Error updating profile:', error);
      setError(t('editProfile.error'));
    } finally {
      setIsLoading(false);
    }
  };

  const hasChanged =
    firstName.trim() !== (initialFirstName ?? '').trim() ||
    lastName.trim() !== (initialLastName ?? '').trim();

  const isValid =
    firstName.trim() !== '' && lastName.trim() !== '' && hasChanged;

  const userInitials = userName
    ? userName
        .split(' ')
        .map((word) => word[0])
        .join('')
        .toUpperCase()
        .slice(0, 2)
    : '??';

  return {
    t,
    userName,
    userInitials,
    firstName,
    lastName,
    setFirstName,
    setLastName,
    handleBack,
    onSave,
    error,
    setError,
    success,
    setSuccess,
    isLoading,
    isValid,
  };
};
