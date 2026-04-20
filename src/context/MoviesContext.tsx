import { useAuth } from './AuthContext';
import {
  addUserMovie,
  deleteUserMovie,
  getUserMovies,
} from '@/services/userMovies';
import { InsertUserMovie, UserMovie } from '@/types/app.types';
import {
  createContext,
  FC,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

// Tipos
type MoviesContextValue = {
  userMovies: UserMovie[];
  isLoading: boolean;
  refreshMovies: () => Promise<void>;
  addMovie: (movie: InsertUserMovie) => Promise<void>;
  deleteMovie: (tmdbMovieId: number) => Promise<void>;
};

const MoviesContext = createContext<MoviesContextValue | undefined>(undefined);

export const MoviesProvider: FC<{ children: ReactNode }> = ({ children }) => {
  // datos de la sesion para obtener el userId
  const { session } = useAuth();
  const [loading, setLoading] = useState(true);
  // estado de las peliculas del usuarios
  const [userMovies, setUserMovies] = useState<UserMovie[]>([]);

  // cargar las peliculas del usuario
  const refreshMovies = useCallback(async () => {
    if (!session?.user?.id) return;
    setLoading(true);
    try {
      const data = await getUserMovies(session.user.id);
      setUserMovies(data);
    } catch (error) {
      console.log('Error al cargar las peliculas del usuario:', error);
    } finally {
      setLoading(false);
    }
  }, [session?.user?.id]);

  useEffect(() => {
    if (session?.user?.id) {
      refreshMovies();
    } else {
      setUserMovies([]);
    }
  }, [session?.user?.id, refreshMovies]);

  // agregar pelicula (refresca la lista despues de agregar)
  const addMovie = useCallback(
    async (movie: InsertUserMovie) => {
      await addUserMovie(movie);
      await refreshMovies();
    },
    [refreshMovies],
  );

  const deleteMovie = useCallback(
    async (tmdbMovieId: number) => {
      if (!session?.user?.id) return;
      await deleteUserMovie(session.user.id, tmdbMovieId);
      await refreshMovies();
    },
    [refreshMovies, session?.user?.id],
  );

  return (
    <MoviesContext.Provider
      value={{
        userMovies,
        isLoading: loading,
        refreshMovies,
        addMovie,
        deleteMovie,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export const useMovies = (): MoviesContextValue => {
  const context = useContext(MoviesContext);
  if (!context) {
    throw new Error('useMovies debe usarse dentro de un MoviesProvider');
  }
  return context;
};
