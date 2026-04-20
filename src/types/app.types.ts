// MANUALLY ADDED TYPES
export enum SeriesStatus {
  Watching = 'watching',
  Completed = 'completed',
  Planned = 'planned',
  Dropped = 'dropped',
}

export type Profile = {
  id: string;
  username: string | null;
  first_name: string | null;
  last_name: string | null;
  avatar_url: string | null;
  created_at: string;
};

export type UserSeries = {
  id: string;
  user_id: string;
  tmdb_series_id: number;
  series_name: string;
  poster_path: string | null;
  status: SeriesStatus;
  rating: number | null;
  notes: string | null;
  current_season: number | null;
  current_episode: number | null;
  vote_average: number | null;
  number_of_seasons: number | null;
  number_of_episodes: number | null;
  created_at: string;
  updated_at: string;
};

export type InsertUserSeries = Omit<
  UserSeries,
  | 'id'
  | 'created_at'
  | 'updated_at'
  | 'rating'
  | 'notes'
  | 'current_season'
  | 'current_episode'
  | 'vote_average'
  | 'number_of_seasons'
  | 'number_of_episodes'
> & {
  rating?: number | null;
  notes?: string | null;
  current_season?: number | null;
  current_episode?: number | null;
  vote_average?: number | null;
  number_of_seasons?: number | null;
  number_of_episodes?: number | null;
};
export type UpdateUserSeries = Partial<
  Omit<UserSeries, 'id' | 'user_id' | 'created_at' | 'updated_at'>
>;

export type UserMovie = {
  created_at: string;
  id: string;
  movie_name: string;
  notes: string | null;
  poster_path: string | null;
  rating: number | null;
  runtime: number | null;
  status: SeriesStatus;
  tmdb_movie_id: number;
  updated_at: string;
  user_id: string;
  vote_average: number | null;
};

export type InsertUserMovie = Omit<
  UserMovie,
  'id' | 'created_at' | 'updated_at' | 'rating' | 'notes' | 'vote_average'
> & {
  rating?: number | null;
  notes?: string | null;
  vote_average?: number | null;
};

export type UpdateUserMovie = Partial<
  Omit<UserMovie, 'id' | 'user_id' | 'created_at' | 'updated_at'>
>;
