// El import ejecuta la configuración de i18next como efecto de módulo
import '@/i18n';
import AppNavigator from '@/navigation';
import { theme } from '@/theme';
import { AuthProvider } from '@context/AuthContext';
import { SeriesProvider } from '@context/SeriesContext';
import {
  DMSerifDisplay_400Regular,
  DMSerifDisplay_400Regular_Italic,
} from '@expo-google-fonts/dm-serif-display';
import {
  SpaceMono_400Regular,
  SpaceMono_400Regular_Italic,
  SpaceMono_700Bold,
  SpaceMono_700Bold_Italic,
} from '@expo-google-fonts/space-mono';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { ThemeProvider } from 'styled-components/native';

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
          <SeriesProvider>
            <View style={{ flex: 1, backgroundColor: '#070B11' }}>
              <AppNavigator />
            </View>
            <StatusBar style="light" backgroundColor="#070B11" />
          </SeriesProvider>
        </AuthProvider>
      </PaperProvider>
    </ThemeProvider>
  );
}
