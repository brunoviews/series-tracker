import { supabase } from '../lib/supabase';
import { Session } from '@supabase/supabase-js';
import React, {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

// ─── Tipos ────────────────────────────────────────────────────────────────────

type AuthContextValue = {
  session: Session | null;
  loading: boolean;
  signOut: () => Promise<void>;
  userEmail?: string | null;
  userName?: string | null;
};

// ─── Contexto ─────────────────────────────────────────────────────────────────

// El valor inicial no importa porque siempre usamos el Provider.
// undefined fuerza a que useAuth() solo se pueda usar dentro del Provider.
const AuthContext = createContext<AuthContextValue | undefined>(undefined);

// ─── Provider ─────────────────────────────────────────────────────────────────

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [userName, setUserName] = useState<string | null>(null);
  // loading=true hasta que Supabase confirme el estado inicial de la sesión.
  // Evita el flash del login cuando el usuario ya tenía sesión guardada.
  const [loading, setLoading] = useState(true);

  const signOut = async (): Promise<void> => {
    await supabase.auth.signOut();
    // onAuthStateChange recibirá SIGNED_OUT y pondrá session a null automáticamente.
  };

  // 1. Suscripción al estado de auth — solo se monta una vez.
  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, newSession) => {
      setSession(newSession);
      setLoading(false);
      // Limpia el nombre al cerrar sesión para no mostrar datos del usuario anterior.
      if (!newSession) setUserName(null);
    });

    return () => subscription.unsubscribe();
  }, []);

  // 2. Fetch del perfil cuando hay sesión activa.
  //    [session?.user?.id] → solo re-ejecuta si cambia el usuario, no en cada render.
  useEffect(() => {
    if (!session?.user?.id) return;

    const fetchProfile = async () => {
      const { data, error } = await supabase
        .from('profiles')
        .select('first_name, last_name')
        .eq('id', session.user.id)
        .single();

      if (!error && data) {
        setUserName(`${data.first_name} ${data.last_name}`);
      }
    };
    fetchProfile();
  }, [session?.user?.id]);

  return (
    <AuthContext.Provider
      value={{
        session,
        loading,
        signOut,
        userEmail: session?.user?.email,
        userName,
      }}
    >
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
