ALTER TABLE user_series
  ADD COLUMN vote_average float4 NULL,
  ADD COLUMN number_of_seasons int4 NULL,
  ADD COLUMN number_of_episodes int4 NULL;