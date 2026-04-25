import { supabase } from '@/lib/supabase';
import { Update } from '@/types/app.types';

export const deleteUser = async (): Promise<void> => {
  const { error } = await supabase.rpc('delete_user');
  if (error) throw new Error(error.message);
};

export const updateUser = async (userId: string, update: Update) => {
  const { data, error } = await supabase
    .from('profiles')
    .update(update)
    .eq('id', userId)
    .select('*')
    .single();

  if (error) throw new Error(error.message);
  return data;
};
