import type { RootParamsList } from './types';
import { createNavigationContainerRef } from '@react-navigation/native';

// Referencia al NavigationContainer.
// Permite navegar desde fuera del árbol de React (p.ej. listeners de Supabase Auth).
export const navigationRef = createNavigationContainerRef<RootParamsList>();

// Navega a una pantalla del stack raíz
export const navigateTo = <RouteName extends keyof RootParamsList>(
  ...args: RootParamsList[RouteName] extends undefined
    ? [screen: RouteName] | [screen: RouteName, params: RootParamsList[RouteName]]
    : [screen: RouteName, params: RootParamsList[RouteName]]
) => {
  if (navigationRef.isReady()) {
    navigationRef.navigate(...(args as never));
  }
};

// Resetea el stack con una única pantalla (útil para logout / login redirect)
export const resetTo = <RouteName extends keyof RootParamsList>(
  ...args: RootParamsList[RouteName] extends undefined
    ? [screen: RouteName] | [screen: RouteName, params: RootParamsList[RouteName]]
    : [screen: RouteName, params: RootParamsList[RouteName]]
) => {
  if (navigationRef.isReady()) {
    const [name, params] = args;
    navigationRef.reset({
      index: 0,
      routes: params === undefined ? [{ name }] : [{ name, params }],
    });
  }
};
