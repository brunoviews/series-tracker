import { useAuth } from '@/context/AuthContext';
import { RootParamsList, ScreenType } from '@/navigation/types';
import { deleteUser } from '@/services/user';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const useViewModel = () => {
  const { t } = useTranslation();
  const { signOut, userName, userEmail } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigation = useNavigation<NativeStackNavigationProp<RootParamsList>>();

  const onEditProfile = () => {
    navigation.navigate(ScreenType.EDIT_PROFILE);
  };

  const onDeleteAccount = () => {
    setIsOpen(true);
  };

  const onCancelDeleteAccount = () => {
    setIsOpen(false);
  };

  const onConfirmDeleteAccount = async () => {
    setIsDeleting(true);
    setError(null);
    try {
      await deleteUser();
      await signOut();
    } catch (error) {
      console.error('Error deleting account:', error);
      setError(t('profile.deleteAccount.error'));
    } finally {
      setIsDeleting(false);
      setIsOpen(false);
    }
  };

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
    signOut,
    userName,
    userInitials,
    userEmail,
    isOpen,
    isDeleting,
    onDeleteAccount,
    onConfirmDeleteAccount,
    onCancelDeleteAccount,
    onEditProfile,
    error,
    setError,
  };
};
