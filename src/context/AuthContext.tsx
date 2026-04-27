import { supabase } from '../lib/supabase';
import { Session } from '@supabase/supabase-js';
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

type AuthContextValue = {
  session: Session | null;
  loading: boolean;
  isProfileComplete?: boolean;
  signOut: () => Promise<void>;
  refreshProfile?: () => void;
  userEmail?: string | null;
  userName?: string | null;
  userFirstName?: string | null;
  userLastName?: string | null;
};

// ─── Contexto ─────────────────────────────────────────────────────────────────

// El valor inicial no importa porque siempre usamos el Provider.
// undefined fuerza a que useAuth() solo se pueda usar dentro del Provider.
const AuthContext = createContext<AuthContextValue | undefined>(undefined);

// ─── Provider ─────────────────────────────────────────────────────────────────

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [userName, setUserName] = useState<string | null>(null);
  const [userFirstName, setUserFirstName] = useState<string | null>(null);
  const [userLastName, setUserLastName] = useState<string | null>(null);
  const [isProfileComplete, setIsProfileComplete] = useState<boolean>(false);
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
      if (!newSession) {
        setUserName(null);
        setUserFirstName(null);
        setUserLastName(null);
        setIsProfileComplete(false);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  // 2. Fetch del perfil cuando hay sesión activa.
  //    [session?.user?.id] → solo re-ejecuta si cambia el usuario, no en cada render.

  const fetchProfile = useCallback(async () => {
    if (!session?.user?.id) return;
    const { data, error } = await supabase
      .from('profiles')
      .select('first_name, last_name')
      .eq('id', session.user.id)
      .single();

    if (!error && data) {
      setUserName(`${data.first_name} ${data.last_name}`);
      setUserLastName(data.last_name);
      setUserFirstName(data.first_name);
      setIsProfileComplete(
        !!data.first_name?.trim() && !!data.last_name?.trim(),
      );
    }
  }, [session?.user?.id]);
  useEffect(() => {
    if (!session?.user?.id) return;

    fetchProfile();
  }, [session?.user?.id, fetchProfile, userName]);

  return (
    <AuthContext.Provider
      value={{
        session,
        loading,
        isProfileComplete,
        signOut,
        refreshProfile: fetchProfile,
        userEmail: session?.user?.email,
        userName,
        userFirstName,
        userLastName,
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
