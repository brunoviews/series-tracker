import HomeView from '../views/home';
import ProfileView from '../views/profile';
import SearchView from '../views/search';
import SeriesView from '../views/series';
import { ScreenType, type TabParamsList } from './types';
import MoviesView from '@/views/movies';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  HouseIcon,
  MagnifyingGlassIcon,
  PopcornIcon,
  TelevisionIcon,
  UserIcon,
} from 'phosphor-react-native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from 'styled-components/native';

const Tab = createBottomTabNavigator<TabParamsList>();

export default function MainNavigator() {
  const insets = useSafeAreaInsets();
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.colors.components.bottomTab.fill,
          borderTopWidth: 1,
          borderTopColor: theme.colors.stroke.primary.weak,
          height: 64 + insets.bottom,
          paddingBottom: insets.bottom,
          paddingTop: 10,
          elevation: 0,
        },
        tabBarItemStyle: {
          justifyContent: 'center',
          alignItems: 'center',
        },
        tabBarLabelStyle: {
          fontFamily: theme.typography.caption.fontFamily,
          fontSize: 10,
          marginTop: 2,
        },
        tabBarActiveTintColor: theme.colors.components.bottomTab.iconActive,
        tabBarInactiveTintColor: theme.colors.components.bottomTab.iconDefault,
      }}
    >
      <Tab.Screen
        name={ScreenType.HOME}
        component={HomeView}
        options={{
          tabBarLabel: t('tabs.home'),
          tabBarIcon: ({ color, focused }) => (
            <HouseIcon
              color={color}
              size={32}
              weight={focused ? 'fill' : 'regular'}
            />
          ),
        }}
      />
      <Tab.Screen
        name={ScreenType.SERIES}
        component={SeriesView}
        options={{
          tabBarLabel: t('tabs.series'),
          tabBarIcon: ({ color, focused }) => (
            <TelevisionIcon
              color={color}
              size={32}
              weight={focused ? 'fill' : 'regular'}
            />
          ),
        }}
      />
      <Tab.Screen
        name={ScreenType.MOVIES}
        component={MoviesView}
        options={{
          tabBarLabel: t('tabs.movies'),
          tabBarIcon: ({ color, focused }) => (
            <PopcornIcon
              color={color}
              size={32}
              weight={focused ? 'fill' : 'regular'}
            />
          ),
        }}
      />
      <Tab.Screen
        name={ScreenType.SEARCH}
        component={SearchView}
        options={{
          tabBarLabel: t('tabs.search'),
          tabBarIcon: ({ color, focused }) => (
            <MagnifyingGlassIcon
              color={color}
              size={32}
              weight={focused ? 'fill' : 'regular'}
            />
          ),
        }}
      />
      <Tab.Screen
        name={ScreenType.PROFILE}
        component={ProfileView}
        options={{
          tabBarLabel: t('tabs.profile'),
          tabBarIcon: ({ color, focused }) => (
            <UserIcon
              color={color}
              size={32}
              weight={focused ? 'fill' : 'regular'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
