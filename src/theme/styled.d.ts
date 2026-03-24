// Extiende DefaultTheme de styled-components/native con nuestro AppTheme.
// Esto hace que `theme` esté tipado en todos los styled components sin
// tener que importar el tipo manualmente en cada fichero de estilos.
import type { AppTheme } from './types';

declare module 'styled-components/native' {
  export interface DefaultTheme extends AppTheme {}
}
