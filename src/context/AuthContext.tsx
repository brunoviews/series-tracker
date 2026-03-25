import React, {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { Session } from '@supabase/supabase-js';
import { supabase } from '../lib/supabase';

// ─── Tipos ────────────────────────────────────────────────────────────────────

type AuthContextValue = {
  session: Session | null;
  loading: boolean;
};

// ─── Contexto ─────────────────────────────────────────────────────────────────

// El valor inicial no importa porque siempre usamos el Provider.
// undefined fuerza a que useAuth() solo se pueda usar dentro del Provider.
const AuthContext = createContext<AuthContextValue | undefined>(undefined);

// ─── Provider ─────────────────────────────────────────────────────────────────

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [session, setSession] = useState<Session | null>(null);
  // loading=true hasta que Supabase confirme el estado inicial de la sesión.
  // Evita el flash del login cuando el usuario ya tenía sesión guardada.
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 1. Supabase lee AsyncStorage y emite el estado inicial (INITIAL_SESSION).
    //    Esto ocurre una sola vez al montar el provider.
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, newSession) => {
      setSession(newSession);
      setLoading(false);
    });

    // 2. Cuando el componente se desmonta, cancelamos la suscripción.
    //    Sin esto, el listener seguiría activo aunque el componente ya no exista
    //    (memory leak).
    return () => subscription.unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ session, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

// ─── Hook ─────────────────────────────────────────────────────────────────────

// Encapsulamos el useContext en un hook para:
// 1. No exponer AuthContext directamente (nadie importa el contexto bruto).
// 2. Lanzar un error claro si alguien usa useAuth() fuera del AuthProvider.
export const useAuth = (): AuthContextValue => {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error('useAuth debe usarse dentro de <AuthProvider>');
  }
  return ctx;
};
