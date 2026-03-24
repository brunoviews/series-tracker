import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import type { MainTabParamList } from './types';
import HomeView from '../views/home';
import SearchView from '../views/search';
import ProfileView from '../views/profile';

const Tab = createBottomTabNavigator<MainTabParamList>();

export default function MainNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeView} />
      <Tab.Screen name="Search" component={SearchView} />
      <Tab.Screen name="Profile" component={ProfileView} />
    </Tab.Navigator>
  );
}
