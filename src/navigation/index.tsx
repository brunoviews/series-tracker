import { useAuth } from '../context/AuthContext';
import LoginView from '../views/login';
import RegisterView from '../views/register';
import { generalStackScreenOptions,rootStackScreenOptions } from './constants';
import MainNavigator from './MainNavigator';
import { navigationRef } from './service';
import { type RootParamsList,ScreenType } from './types';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { FC } from 'react';
import { ActivityIndicator, View } from 'react-native';

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
