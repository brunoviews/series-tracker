import { useAuth } from '@/context/AuthContext';
import { supabase } from '@/lib/supabase';
import { useEffect, useState } from 'react';

const getGreetingKey = (): 'morning' | 'afternoon' | 'evening' => {
  const hour = new Date().getHours();
  if (hour < 12) return 'morning';
  if (hour < 20) return 'afternoon';
  return 'evening';
};

export const useViewModel = () => {
  const { session, userName } = useAuth();
  const [firstName, setFirstName] = useState<string | null>(null);

  const userInitials = userName
    ? userName
        .split(' ')
        .map((word) => word[0])
        .join('')
        .toUpperCase()
        .slice(0, 2)
    : '?';

  useEffect(() => {
    if (!session?.user?.id) return;

    const fetchProfile = async () => {
      const { data, error } = await supabase
        .from('profiles')
        .select('first_name')
        .eq('id', session.user.id)
        .single();

      if (!error && data) {
        setFirstName(data.first_name);
      }
    };

    fetchProfile();
  }, [session?.user?.id]);

  const greetingKey = getGreetingKey();

  return {
    firstName,
    greetingKey,
    userInitials,
  };
};
