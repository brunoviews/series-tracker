import { supabase } from '../lib/supabase';
import type { InsertUserSeries, UserSeries } from '../types/database.types';

export const getUserSeries = async (userId: string): Promise<UserSeries[]> => {
  const { data, error } = await supabase
    .from('user_series')
    .select('*')
    .eq('user_id', userId);

  if (error) throw new Error(error.message);
  return (data as UserSeries[]) ?? [];
};

export const addUserSeries = async (data: InsertUserSeries): Promise<void> => {
  const { error } = await supabase
    .from('user_series')
    .upsert(data, { onConflict: 'user_id,tmdb_series_id' });
  if (error) throw new Error(error.message);
};
