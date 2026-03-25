import React from 'react';
import { FC } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { navigationRef } from './service';
import { rootStackScreenOptions, generalStackScreenOptions } from './constants';
import { ScreenType, type RootParamsList } from './types';
import LoginView from '../views/login';
import RegisterView from '../views/register';
import MainNavigator from './MainNavigator';
import { useAuth } from '../context/AuthContext';

const { Navigator, Group, Screen } =
  createNativeStackNavigator<RootParamsList>();

const AppNavigator: FC = () => {
  const { session, loading } = useAuth();

  // Mientras Supabase comprueba si hay sesión guardada, mostramos un spinner.
  // Sin esto, el usuario vería un flash del login aunque ya estuviera autenticado.
  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <NavigationContainer ref={navigationRef}>
      <Navigator screenOptions={rootStackScreenOptions}>
        {session ? (
          <Group screenOptions={generalStackScreenOptions}>
            <Screen name={ScreenType.TABS} component={MainNavigator} />
          </Group>
        ) : (
          <Group screenOptions={generalStackScreenOptions}>
            <Screen name={ScreenType.LOGIN} component={LoginView} />
            <Screen name={ScreenType.REGISTER} component={RegisterView} />
          </Group>
        )}
      </Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
