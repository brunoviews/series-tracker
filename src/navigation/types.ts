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
  // Detail
  DETAIL = 'Detail',
  // Edit Profile
  EDIT_PROFILE = 'EditProfile',
}

// ─── Param lists ─────────────────────────────────────────────────────────────
// RootParamsList: pantallas del stack raíz (auth + entrada a tabs + detail)
export type RootParamsList = {
  [ScreenType.LOGIN]: undefined;
  [ScreenType.REGISTER]: undefined;
  [ScreenType.TABS]: undefined;
  [ScreenType.DETAIL]: {
    tmdbId: number;
    type: 'series' | 'movie';
  };
  [ScreenType.EDIT_PROFILE]: undefined;
};

// TabParamsList: pantallas internas del tab navigator
export type TabParamsList = {
  [ScreenType.HOME]: undefined;
  [ScreenType.SEARCH]: undefined;
  [ScreenType.PROFILE]: undefined;
};
