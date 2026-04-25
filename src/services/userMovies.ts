
import { supabase } from '@/lib/supabase';
import type { InsertUserMovie, UserMovie } from '@/types/app.types';

export const getUserMovies = async (userId: string): Promise<UserMovie[]> => {
  const { data, error } = await supabase
    .from('user_movies')
    .select('*')
    .eq('user_id', userId);

  if (error) throw new Error(error.message);
  return (data as UserMovie[]) ?? [];
};

export const addUserMovie = async (data: InsertUserMovie): Promise<void> => {
  const { error } = await supabase
    .from('user_movies')
    .upsert(data, { onConflict: 'user_id,tmdb_movie_id' });
  if (error) throw new Error(error.message);
};

export const deleteUserMovie = async (
  userId: string,
  tmdbMovieId: number,
): Promise<void> => {
  const { error } = await supabase
    .from('user_movies')
    .delete()
    .eq('user_id', userId)
    .eq('tmdb_movie_id', tmdbMovieId);
  if (error) throw new Error(error.message);
};
