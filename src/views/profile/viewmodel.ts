import { useTranslation } from 'react-i18next';
import { useAuth } from '../../context/AuthContext';

export const useViewModel = () => {
  const { t } = useTranslation();

  const { signOut } = useAuth();

  return { t, signOut };
};
