export type AppTheme = {
  colors: {
    primary: string;
    background: string;
    surface: string;
    text: string;
    textSecondary: string;
    border: string;
    error: string;
  };
  spacing: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
  typography: {
    sizes: {
      sm: number;
      md: number;
      lg: number;
      xl: number;
      xxl: number;
    };
  };
  borderRadius: {
    sm: number;
    md: number;
    lg: number;
    full: number;
  };
};
