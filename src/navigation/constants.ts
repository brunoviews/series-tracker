import type { NativeStackNavigationOptions } from '@react-navigation/native-stack';

// Opciones para el Navigator raíz (sin header, animación estándar)
export const rootStackScreenOptions: NativeStackNavigationOptions = {
  headerShown: false,
  animation: 'slide_from_right',
};

// Opciones para los Groups. Aquí añadiremos gestos, animaciones,
// o configuración específica de cada grupo cuando sea necesario.
export const generalStackScreenOptions: NativeStackNavigationOptions = {
  headerShown: false,
};
