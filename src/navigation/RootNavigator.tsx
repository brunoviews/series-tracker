import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';

/**
 * RootNavigator decide qué stack mostrar según el estado de autenticación.
 * Cuando integremos Supabase, reemplazaremos `isAuthenticated` por el
 * listener real de sesión (onAuthStateChange).
 */
export default function RootNavigator() {
  // TODO: reemplazar con estado real de Supabase Auth
  const [isAuthenticated] = useState(false);

  return (
    <NavigationContainer>
      {isAuthenticated ? <MainNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
