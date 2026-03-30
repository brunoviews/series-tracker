const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
const TMDB_IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w185';
const apiKey = process.env.EXPO_PUBLIC_TMDB_API_KEY!;

// Tipo que representa cada resultado que nos devuelve la API de TMDB
export type TmdbSeries = {
  id: number;
  name: string;
  overview: string;
  poster_path: string | null;
  first_air_date: string;
  vote_average: number;
  vote_count: number;
};

// Tipo que representa la respuesta completa del endpoint de búsqueda
type TmdbSearchResponse = {
  page: number;
  results: TmdbSeries[];
  total_pages: number;
  total_results: number;
};

// Construye la URL completa de un poster a partir del poster_path que devuelve la API.
// Devuelve null si no hay poster (no todas las series tienen uno).
export const getPosterUrl = (posterPath: string | null): string | null => {
  if (!posterPath) return null;
  return `${TMDB_IMAGE_BASE_URL}${posterPath}`;
};

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
