import { useAuth } from '../../context/AuthContext';
import { useTranslation } from 'react-i18next';

export const useViewModel = () => {
  const { t } = useTranslation();

  const { signOut } = useAuth();

  return { t, signOut };
};
