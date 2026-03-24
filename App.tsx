import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/theme';
import RootNavigator from './src/navigation/RootNavigator';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <RootNavigator />
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
