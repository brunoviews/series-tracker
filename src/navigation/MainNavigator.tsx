import HomeView from '../views/home';
import ProfileView from '../views/profile';
import SearchView from '../views/search';
import { ScreenType, type TabParamsList } from './types';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  HouseIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from 'phosphor-react-native';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator<TabParamsList>();

const ACTIVE_COLOR = '#2DD4BF';
const INACTIVE_COLOR = '#94A3B8';
const TAB_BG = '#0C1219';

export default function MainNavigator() {
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: TAB_BG,
          borderTopWidth: 1,
          borderTopColor: '#2DD4BF33', // Usamos el color activo con transparencia para el borde
          height: 64 + insets.bottom,
          paddingBottom: insets.bottom,
          paddingTop: 20,
          elevation: 0,
        },
        tabBarItemStyle: {
          justifyContent: 'center',
          alignItems: 'center',
        },
        tabBarActiveTintColor: ACTIVE_COLOR,
        tabBarInactiveTintColor: INACTIVE_COLOR,
      }}
    >
      <Tab.Screen
        name={ScreenType.HOME}
        component={HomeView}
        options={{
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
        name={ScreenType.SEARCH}
        component={SearchView}
        options={{
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
