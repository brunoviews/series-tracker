import type { AppTheme } from './types';

// Valores placeholder. Se actualizarán cuando tengamos el diseño definitivo.
export const theme: AppTheme = {
  colors: {
    primary: '#6366f1',
    background: '#ffffff',
    surface: '#f9fafb',
    text: '#111827',
    textSecondary: '#6b7280',
    border: '#e5e7eb',
    error: '#ef4444',
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  typography: {
    sizes: {
      sm: 12,
      md: 14,
      lg: 18,
      xl: 24,
      xxl: 32,
    },
  },
  borderRadius: {
    sm: 4,
    md: 8,
    lg: 16,
    full: 9999,
  },
};
