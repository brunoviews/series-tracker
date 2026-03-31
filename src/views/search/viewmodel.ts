import type { TmdbSeries } from '../../lib/tmdb';
import { getPosterUrl,searchSeries } from '../../lib/tmdb';
import { useEffect,useState } from 'react';

export const useViewModel = () => {
  const [searchText, setSearchText] = useState('');
  const [results, setResults] = useState<TmdbSeries[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Si el texto está vacío, limpia los resultados y no hagas nada más
    if (searchText.trim() === '') {
      // TODO: vacía el array de results
      setResults([]);
      return;
    }

    // Crea un temporizador que espera 500ms antes de llamar a la API
    const timer = setTimeout(async () => {
      // TODO: pon isLoading a true
      setIsLoading(true);
      // TODO: pon error a null
      setError(null);

      try {
        const data = await searchSeries(searchText);
        // Convertimos el poster_path relativo a URL completa
        setResults(
          data.map((item) => ({
            ...item,
            poster_path: getPosterUrl(item.poster_path),
          })),
        );
      } catch (e) {
        // TODO: guarda el mensaje de error en el estado
        console.log(`Error buscando series: ${e}`);
        setError((e as Error).message);
      } finally {
        // TODO: pon isLoading a false
        setIsLoading(false);
      }
    }, 500);

    // Cleanup: cancela el temporizador si el usuario sigue escribiendo
    // antes de que pasen los 500ms
    return () => clearTimeout(timer);
  }, [searchText]); // El efecto se ejecuta cada vez que cambia searchText

  return { searchText, setSearchText, results, isLoading, error };
};
