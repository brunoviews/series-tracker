import type { colors } from './colors';

// Fuentes del proyecto via @expo-google-fonts.
// Se cargan en App.tsx con useFonts().
export type Fonts =
  | 'SpaceMono_400Regular'
  | 'SpaceMono_400Regular_Italic'
  | 'SpaceMono_700Bold'
  | 'SpaceMono_700Bold_Italic'
  | 'DMSerifDisplay_400Regular'
  | 'DMSerifDisplay_400Regular_Italic';

// Variantes de botón. Se usan en el componente Button con styled-components.
export type ThemeVariant = 'primary' | 'ghost' | 'neutral';

// Variantes tipográficas.
// Uso: styled(Text).attrs({ variant: 'title-1' })
export type TextVariant =
  | 'display-1' // PerfectlyNineties — hero, posters
  | 'display-2' // PerfectlyNineties — titulos de sección grandes
  | 'title-1' // GTAmericaMono-Bold 28px
  | 'title-2' // GTAmericaMono-Bold 22px
  | 'title-3' // GTAmericaMono-Medium 18px
  | 'headline' // GTAmericaMono-Medium 16px
  | 'subheadline' // GTAmericaMono-Regular 15px
  | 'body-1-regular' // GTAmericaMono-Regular 16px
  | 'body-1-medium' // GTAmericaMono-Medium 16px
  | 'body-2-regular' // GTAmericaMono-Regular 14px
  | 'body-2-medium' // GTAmericaMono-Medium 14px
  | 'caption' // GTAmericaMono-Regular 12px
  | 'label' // GTAmericaMono-Medium 12px
  | 'overline'; // GTAmericaMono-Regular 11px uppercase

export type TypographyStyle = {
  fontFamily: Fonts;
  fontSize: number;
  fontWeight: '400' | '500' | '700';
  lineHeight?: number;
  letterSpacing?: number;
  textTransform?: 'uppercase' | 'none' | 'lowercase' | 'capitalize';
};

export type AppTheme = {
  colors: typeof colors;
  typography: Record<TextVariant, TypographyStyle>;
  spacing: {
    xs: number; // 4
    sm: number; // 8
    md: number; // 16
    lg: number; // 24
    xl: number; // 32
    xxl: number; // 48
  };
  borderRadius: {
    sm: number; // 4
    md: number; // 12  — inputs
    lg: number; // 16  — cards
    full: number; // 9999 — avatares, pills
  };
};
