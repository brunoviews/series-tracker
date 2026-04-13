const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
const TMDB_IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w185';
const TMDB_BACKDROP_BASE_URL = 'https://image.tmdb.org/t/p/w1280';
const apiKey = process.env.EXPO_PUBLIC_TMDB_API_KEY!;

// ─── Tipos compartidos ────────────────────────────────────────────────────────

export type TmdbGenre = {
  id: number;
  name: string;
};

export type TmdbCastMember = {
  id: number;
  name: string;
  character: string;
  profile_path: string | null;
};

export type TmdbCredits = {
  cast: TmdbCastMember[];
};

// ─── Series ───────────────────────────────────────────────────────────────────

// Resultado del endpoint de búsqueda /search/tv
export type TmdbSeries = {
  id: number;
  name: string;
  overview: string;
  poster_path: string | null;
  first_air_date: string;
  vote_average: number;
  vote_count: number;
  rating?: number | null; // No viene de TMDB, pero lo añadimos para mostrar la nota del usuario en la lista de resultados
};

// Resultado del endpoint de detalle /tv/{id}
export type TmdbSeriesDetail = TmdbSeries & {
  backdrop_path: string | null;
  genres: TmdbGenre[];
  number_of_seasons: number;
  number_of_episodes: number;
  status: string;
  credits: TmdbCredits;
};

// ─── Películas ────────────────────────────────────────────────────────────────

// Resultado del endpoint de búsqueda /search/movie
export type TmdbMovie = {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  release_date: string;
  vote_average: number;
  vote_count: number;
  rating?: number | null; // No viene de TMDB, pero lo añadimos para mostrar la nota del usuario en la lista de resultados
};

// Resultado del endpoint de detalle /movie/{id}
export type TmdbMovieDetail = TmdbMovie & {
  backdrop_path: string | null;
  genres: TmdbGenre[];
  runtime: number;
  status: string;
  credits: TmdbCredits;
};

// ─── Respuestas paginadas ─────────────────────────────────────────────────────

type TmdbSearchResponse = {
  page: number;
  results: TmdbSeries[];
  total_pages: number;
  total_results: number;
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

// Construye la URL completa de un poster a partir del poster_path que devuelve la API.
// Devuelve null si no hay poster (no todas las series tienen uno).
export const getPosterUrl = (posterPath: string | null): string | null => {
  if (!posterPath) return null;
  return `${TMDB_IMAGE_BASE_URL}${posterPath}`;
};

export const getBackdropUrl = (backdropPath: string | null): string | null => {
  if (!backdropPath) return null;
  return `${TMDB_BACKDROP_BASE_URL}${backdropPath}`;
};

// ─── Endpoints ────────────────────────────────────────────────────────────────

// Busca series en TMDB por nombre.
// Devuelve un array de TmdbSeries, o array vacío si no hay resultados.
export const searchSeries = async (query: string): Promise<TmdbSeries[]> => {
  const params = new URLSearchParams({
    api_key: apiKey,
    query,
    language: 'es-ES',
    include_adult: 'false',
    page: '1',
  });

  const response = await fetch(
    `${TMDB_BASE_URL}/search/tv?${params.toString()}`,
  );

  if (!response.ok) {
    throw new Error(`TMDB error: ${response.status}`);
  }

  const data: TmdbSearchResponse = await response.json();
  return data.results;
};

export const getSerieById = async (
  tmdbId: number,
): Promise<TmdbSeriesDetail> => {
  const params = new URLSearchParams({
    api_key: apiKey,
    language: 'es-ES',
    append_to_response: 'credits',
  });

  const response = await fetch(
    `${TMDB_BASE_URL}/tv/${tmdbId}?${params.toString()}`,
  );

  if (!response.ok) {
    throw new Error(`TMDB error: ${response.status}`);
  }

  return response.json() as Promise<TmdbSeriesDetail>;
};

export const getMovieById = async (
  tmdbId: number,
): Promise<TmdbMovieDetail> => {
  const params = new URLSearchParams({
    api_key: apiKey,
    language: 'es-ES',
    append_to_response: 'credits',
  });

  const response = await fetch(
    `${TMDB_BASE_URL}/movie/${tmdbId}?${params.toString()}`,
  );

  if (!response.ok) {
    throw new Error(`TMDB error: ${response.status}`);
  }

  return response.json() as Promise<TmdbMovieDetail>;
};
