// Fuentes: @expo-google-fonts/space-mono + @expo-google-fonts/dm-serif-display
// Cargar en App.tsx con useFonts() — ver comentario al final de este archivo.
import { colors } from './colors';
import type { AppTheme } from './types';

export { colors };

export const theme: AppTheme = {
  colors,

  // ─── Tipografía ───────────────────────────────────────────────────────────────
  // Display → DMSerifDisplay (serifa expresiva, aire cinematic / editorial)
  // Todo lo demás → SpaceMono (monoespaciada geométrica, lectura en oscuro)
  typography: {
    'display-1': {
      fontFamily: 'DMSerifDisplay_400Regular',
      fontSize: 48,
      fontWeight: '400',
      lineHeight: 56,
      letterSpacing: -1,
    },
    'display-2': {
      fontFamily: 'DMSerifDisplay_400Regular',
      fontSize: 36,
      fontWeight: '400',
      lineHeight: 44,
      letterSpacing: -0.5,
    },
    'title-1': {
      fontFamily: 'SpaceMono_700Bold',
      fontSize: 28,
      fontWeight: '700',
      lineHeight: 36,
      letterSpacing: -0.5,
    },
    'title-2': {
      fontFamily: 'SpaceMono_700Bold',
      fontSize: 22,
      fontWeight: '700',
      lineHeight: 28,
    },
    'title-3': {
      fontFamily: 'SpaceMono_400Regular',
      fontSize: 18,
      fontWeight: '400',
      lineHeight: 24,
    },
    headline: {
      fontFamily: 'SpaceMono_700Bold',
      fontSize: 16,
      fontWeight: '700',
      lineHeight: 22,
    },
    subheadline: {
      fontFamily: 'SpaceMono_400Regular',
      fontSize: 15,
      fontWeight: '400',
      lineHeight: 20,
    },
    'body-1-regular': {
      fontFamily: 'SpaceMono_400Regular',
      fontSize: 16,
      fontWeight: '400',
      lineHeight: 24,
    },
    'body-1-medium': {
      fontFamily: 'SpaceMono_700Bold',
      fontSize: 16,
      fontWeight: '700',
      lineHeight: 24,
    },
    'body-2-regular': {
      fontFamily: 'SpaceMono_400Regular',
      fontSize: 14,
      fontWeight: '400',
      lineHeight: 20,
    },
    'body-2-medium': {
      fontFamily: 'SpaceMono_700Bold',
      fontSize: 14,
      fontWeight: '700',
      lineHeight: 20,
    },
    caption: {
      fontFamily: 'SpaceMono_400Regular',
      fontSize: 12,
      fontWeight: '400',
      lineHeight: 16,
    },
    label: {
      fontFamily: 'SpaceMono_700Bold',
      fontSize: 12,
      fontWeight: '700',
      lineHeight: 16,
    },
    overline: {
      fontFamily: 'SpaceMono_400Regular',
      fontSize: 11,
      fontWeight: '400',
      lineHeight: 14,
      letterSpacing: 1,
      textTransform: 'uppercase',
    },
  },

  // ─── Espaciado ────────────────────────────────────────────────────────────────
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
  },

  // ─── Border radius ────────────────────────────────────────────────────────────
  borderRadius: {
    sm: 4,
    md: 12,
    lg: 16,
    full: 9999,
  },
};
