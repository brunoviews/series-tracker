import { deviceLanguage } from "@/i18n";

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
  backdrop_path: string | null;
  first_air_date: string;
  vote_average: number;
  vote_count: number;
  rating?: number | null; // No viene de TMDB, pero lo añadimos para mostrar la nota del usuario en la lista de resultados
};

// Resultado del endpoint de detalle /tv/{id}
export type TmdbSeriesDetail = TmdbSeries & {
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
  backdrop_path: string | null;
  release_date: string;
  vote_average: number;
  vote_count: number;
  rating?: number | null; // No viene de TMDB, pero lo añadimos para mostrar la nota del usuario en la lista de resultados
};

// Resultado del endpoint de detalle /movie/{id}
export type TmdbMovieDetail = TmdbMovie & {
  genres: TmdbGenre[];
  runtime: number;
  status: string;
  credits: TmdbCredits;
};

// ─── Respuestas paginadas ─────────────────────────────────────────────────────

export type SearchSeries = TmdbSeries & {
  media_type: 'series';
};
export type SearchMovie = TmdbMovie & {
  media_type: 'movie';
};

export type SearchResult = SearchSeries | SearchMovie;

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
const getDeviceLanguage = () => {
  const lang = deviceLanguage === 'en' ? 'en-US' : 'es-ES'; // TMDB tiene un idioma específico para inglés, pero para español se basa en el código de país
  return lang;
}

export const searchSeries = async (query: string): Promise<SearchSeries[]> => {
  const params = new URLSearchParams({
    api_key: apiKey,
    query,
    language: getDeviceLanguage(),
    include_adult: 'false',
    page: '1',
  });

  const response = await fetch(
    `${TMDB_BASE_URL}/search/tv?${params.toString()}`,
  );

  if (!response.ok) {
    throw new Error(`TMDB error: ${response.status}`);
  }

  const data = await response.json();
  return data.results.map((series: TmdbSeries) => ({
    ...series,
    media_type: 'series' as const,
  }));
};

export const searchMovies = async (query: string): Promise<SearchMovie[]> => {
  const params = new URLSearchParams({
    api_key: apiKey,
    query,
    language: getDeviceLanguage(),
    include_adult: 'false',
    page: '1',
  });

  const response = await fetch(
    `${TMDB_BASE_URL}/search/movie?${params.toString()}`,
  );

  if (!response.ok) {
    throw new Error(`TMDB error: ${response.status}`);
  }

  const data = await response.json();
  return data.results.map((movie: TmdbMovie) => ({
    ...movie,
    media_type: 'movie' as const,
  }));
};

export const getSerieById = async (
  tmdbId: number,
): Promise<TmdbSeriesDetail> => {
  const params = new URLSearchParams({
    api_key: apiKey,
    language: getDeviceLanguage(),
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
    language: getDeviceLanguage(),
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

type TmdbPagedResponse<T> = {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
};

export const getTrendingMovies = async (
  timeWindow: 'day' | 'week' = 'week',
): Promise<TmdbMovie[]> => {
  const params = new URLSearchParams({
    api_key: apiKey,
    language: getDeviceLanguage(),
    page: '1',
  });

  const response = await fetch(
    `${TMDB_BASE_URL}/trending/movie/${timeWindow}?${params.toString()}`,
  );

  if (!response.ok) {
    throw new Error(`TMDB error: ${response.status}`);
  }

  const data = (await response.json()) as TmdbPagedResponse<TmdbMovie>;
  return data.results;
};

export const getTrendingSeries = async (
  timeWindow: 'day' | 'week' = 'week',
): Promise<TmdbSeries[]> => {
  const params = new URLSearchParams({
    api_key: apiKey,
    language: getDeviceLanguage(),
    page: '1',
  });

  const response = await fetch(
    `${TMDB_BASE_URL}/trending/tv/${timeWindow}?${params.toString()}`,
  );

  if (!response.ok) {
    throw new Error(`TMDB error: ${response.status}`);
  }

  const data = (await response.json()) as TmdbPagedResponse<TmdbSeries>;
  return data.results;
};
