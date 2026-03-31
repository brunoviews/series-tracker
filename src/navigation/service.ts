import type { RootParamsList } from './types';
import { createNavigationContainerRef } from '@react-navigation/native';

// Referencia al NavigationContainer.
// Permite navegar desde fuera del árbol de React (p.ej. listeners de Supabase Auth).
export const navigationRef = createNavigationContainerRef<RootParamsList>();

// Navega a una pantalla del stack raíz
export const navigateTo = (screen: keyof RootParamsList) => {
  if (navigationRef.isReady()) {
    navigationRef.navigate(screen);
  }
};

// Resetea el stack con una única pantalla (útil para logout / login redirect)
export const resetTo = (screen: keyof RootParamsList) => {
  if (navigationRef.isReady()) {
    navigationRef.reset({ index: 0, routes: [{ name: screen }] });
  }
};
