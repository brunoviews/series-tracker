import { useAuth } from '@/context/AuthContext';

const getGreetingKey = (): 'morning' | 'afternoon' | 'evening' => {
  const hour = new Date().getHours();
  if (hour < 12) return 'morning';
  if (hour < 20) return 'afternoon';
  return 'evening';
};

export const useViewModel = () => {
  const { userName, userFirstName } = useAuth();
  const userInitials = userName
    ? userName
        .split(' ')
        .map((word) => word[0])
        .join('')
        .toUpperCase()
        .slice(0, 2)
    : '?';

  const greetingKey = getGreetingKey();

  return {
    userFirstName,
    greetingKey,
    userInitials,
  };
};
