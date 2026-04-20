import {
  addUserSeries,
  deleteUserSeries,
  getUserSeries,
} from '../services/userSeries';
import { useAuth } from './AuthContext';
import type { InsertUserSeries, UserSeries } from '@/types/app.types';
import React, {
  createContext,
  FC,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

// ─── Tipos ────────────────────────────────────────────────────────────────────

type SeriesContextValue = {
  userSeries: UserSeries[];
  userSeriesMap: Record<number, UserSeries>;
  loading: boolean;
  addSeries: (data: InsertUserSeries) => Promise<void>;
  deleteSeries: (tmdbSeriesId: number) => Promise<void>;
  refreshSeries: () => Promise<void>;
};

// ─── Contexto ─────────────────────────────────────────────────────────────────

const SeriesContext = createContext<SeriesContextValue | undefined>(undefined);

// ─── Provider ─────────────────────────────────────────────────────────────────

export const SeriesProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const { session } = useAuth();
  const [userSeries, setUserSeries] = useState<UserSeries[]>([]);
  const [loading, setLoading] = useState(true);

  // Mapa derivado: tmdb_series_id → status (para lookups rápidos en search)
  const userSeriesMap = userSeries.reduce<Record<number, UserSeries>>(
    (acc, s) => {
      acc[s.tmdb_series_id] = s;
      return acc;
    },
    {},
  );

  // Fetch inicial + refetch manual
  const refreshSeries = useCallback(async () => {
    if (!session?.user?.id) return;

    setLoading(true);
    try {
      const data = await getUserSeries(session.user.id);
      setUserSeries(data);
    } catch (e) {
      console.error('Error cargando series:', e);
    } finally {
      setLoading(false);
    }
  }, [session?.user?.id]);

  // Cargar series cuando hay sesión
  useEffect(() => {
    if (session?.user?.id) {
      refreshSeries();
    } else {
      // Sin sesión → limpiar datos (logout)
      setUserSeries([]);
      setLoading(false);
    }
  }, [session?.user?.id, refreshSeries]);

  // Añadir serie → upsert en Supabase + refrescar la lista
  const addSeries = useCallback(
    async (data: InsertUserSeries) => {
      await addUserSeries(data);
      await refreshSeries();
    },
    [refreshSeries],
  );

  // Eliminar serie → delete en Supabase + refrescar la lista
  const deleteSeries = useCallback(
    async (tmdbSeriesId: number) => {
      if (!session?.user?.id) return;
      await deleteUserSeries(session.user.id, tmdbSeriesId);
      await refreshSeries();
    },
    [session?.user?.id, refreshSeries],
  );

  return (
    <SeriesContext.Provider
      value={{
        userSeries,
        userSeriesMap,
        loading,
        addSeries,
        deleteSeries,
        refreshSeries,
      }}
    >
      {children}
    </SeriesContext.Provider>
  );
};

// ─── Hook ─────────────────────────────────────────────────────────────────────

export const useSeries = (): SeriesContextValue => {
  const ctx = useContext(SeriesContext);
  if (!ctx) {
    throw new Error('useSeries debe usarse dentro de <SeriesProvider>');
  }
  return ctx;
};
