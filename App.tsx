import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/theme';
// El import ejecuta la configuración de i18next como efecto de módulo
import './src/i18n';
import AppNavigator from './src/navigation';
import { AuthProvider } from './src/context/AuthContext';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <AppNavigator />
        <StatusBar style="auto" />
      </AuthProvider>
    </ThemeProvider>
  );
}
