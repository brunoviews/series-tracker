import { useAuth } from '@/context/AuthContext';
import { useTranslation } from 'react-i18next';

export const useViewModel = () => {
  const { t } = useTranslation();
  const { signOut, userName, userEmail } = useAuth();


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
  };
};
