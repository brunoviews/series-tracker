// ─── Screen names ────────────────────────────────────────────────────────────
// Enum centralizado para todos los nombres de pantalla.
// Usar siempre ScreenType.X en lugar de strings literales.
export enum ScreenType {
  // Auth
  LOGIN = 'Login',
  REGISTER = 'Register',
  // Main (contenedor de tabs)
  TABS = 'Tabs',
  // Tabs
  HOME = 'Home',
  SEARCH = 'Search',
  PROFILE = 'Profile',
}

// ─── Param lists ─────────────────────────────────────────────────────────────
// RootParamsList: pantallas del stack raíz (auth + entrada a tabs)
export type RootParamsList = {
  [ScreenType.LOGIN]: undefined;
  [ScreenType.REGISTER]: undefined;
  [ScreenType.TABS]: undefined;
};

// TabParamsList: pantallas internas del tab navigator
export type TabParamsList = {
  [ScreenType.HOME]: undefined;
  [ScreenType.SEARCH]: undefined;
  [ScreenType.PROFILE]: undefined;
};
