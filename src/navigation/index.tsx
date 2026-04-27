import { useAuth } from '../context/AuthContext';
import DetailView from '../views/detail';
import EditProfileView from '../views/editProfile';
import LoginView from '../views/login';
import RegisterView from '../views/register';
import { generalStackScreenOptions, rootStackScreenOptions } from './constants';
import MainNavigator from './MainNavigator';
import { navigationRef } from './service';
import { type RootParamsList, ScreenType } from './types';
import Text from '@/components/Text';
import { theme } from '@/theme';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { ActivityIndicator, View } from 'react-native';

const { Navigator, Group, Screen } =
  createNativeStackNavigator<RootParamsList>();

const AppNavigator: FC = () => {
  const { session, isProfileComplete, loading } = useAuth();
  const { t } = useTranslation();

  // Mientras Supabase comprueba si hay sesión guardada, mostramos un spinner.
  // Sin esto, el usuario vería un flash del login aunque ya estuviera autenticado.
  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator />
      </View>
    );
  }
  if (session && !isProfileComplete) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ marginBottom: 16 }}>
          {t('auth.loading.loadingProfile')}
        </Text>
        <ActivityIndicator color={theme.colors.fill.primary.main} />
      </View>
    );
  }

  return (
    <NavigationContainer ref={navigationRef}>
      <Navigator screenOptions={rootStackScreenOptions}>
        {session && isProfileComplete ? (
          <Group screenOptions={generalStackScreenOptions}>
            <Screen name={ScreenType.TABS} component={MainNavigator} />
            <Screen name={ScreenType.DETAIL} component={DetailView} />
            <Screen
              name={ScreenType.EDIT_PROFILE}
              component={EditProfileView}
            />
          </Group>
        ) : !session ? (
          <Group screenOptions={generalStackScreenOptions}>
            <Screen name={ScreenType.LOGIN} component={LoginView} />
            <Screen name={ScreenType.REGISTER} component={RegisterView} />
          </Group>
        ) : null}
      </Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
