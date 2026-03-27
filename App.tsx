import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { PaperProvider } from 'react-native-paper';
import { useFonts } from 'expo-font';
import {
  SpaceMono_400Regular,
  SpaceMono_400Regular_Italic,
  SpaceMono_700Bold,
  SpaceMono_700Bold_Italic,
} from '@expo-google-fonts/space-mono';
import {
  DMSerifDisplay_400Regular,
  DMSerifDisplay_400Regular_Italic,
} from '@expo-google-fonts/dm-serif-display';

// El import ejecuta la configuración de i18next como efecto de módulo
import '@i18n';
import { AuthProvider } from '@context/AuthContext';
import { theme } from '@/theme';
import AppNavigator from '@/navigation';

export default function App() {
  const [fontsLoaded] = useFonts({
    SpaceMono_400Regular,
    SpaceMono_400Regular_Italic,
    SpaceMono_700Bold,
    SpaceMono_700Bold_Italic,
    DMSerifDisplay_400Regular,
    DMSerifDisplay_400Regular_Italic,
  });

  if (!fontsLoaded) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#131313',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <ActivityIndicator color="#C4C0FF" />
      </View>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <PaperProvider>
        <AuthProvider>
          <AppNavigator />
          <StatusBar style="light" />
        </AuthProvider>
      </PaperProvider>
    </ThemeProvider>
  );
}
