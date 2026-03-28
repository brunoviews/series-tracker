import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  HouseIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from 'phosphor-react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ScreenType, type TabParamsList } from './types';
import HomeView from '../views/home';
import SearchView from '../views/search';
import ProfileView from '../views/profile';

const Tab = createBottomTabNavigator<TabParamsList>();

const ACTIVE_COLOR = '#C4C0FF';
const INACTIVE_COLOR = '#C7C4D8';
const TAB_BG = '#131313';

export default function MainNavigator() {
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: TAB_BG,
          borderTopWidth: 1,
          borderTopColor: '#2A2A2A',
          height: 64 + insets.bottom,
          paddingBottom: 10 + insets.bottom,
          paddingTop: 8,
          elevation: 0,
        },
        tabBarActiveTintColor: ACTIVE_COLOR,
        tabBarInactiveTintColor: INACTIVE_COLOR,
        tabBarLabelStyle: {
          fontSize: 12,
          letterSpacing: 0.3,
        },
      }}
    >
      <Tab.Screen
        name={ScreenType.HOME}
        component={HomeView}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <HouseIcon
              color={color}
              size={size}
              weight={focused ? 'fill' : 'regular'}
            />
          ),
        }}
      />
      <Tab.Screen
        name={ScreenType.SEARCH}
        component={SearchView}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <MagnifyingGlassIcon
              color={color}
              size={size}
              weight={focused ? 'fill' : 'regular'}
            />
          ),
        }}
      />
      <Tab.Screen
        name={ScreenType.PROFILE}
        component={ProfileView}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <UserIcon
              color={color}
              size={size}
              weight={focused ? 'fill' : 'regular'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
