import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ScreenType, type TabParamsList } from './types';
import HomeView from '../views/home';
import SearchView from '../views/search';
import ProfileView from '../views/profile';

const Tab = createBottomTabNavigator<TabParamsList>();

export default function MainNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name={ScreenType.HOME} component={HomeView} />
      <Tab.Screen name={ScreenType.SEARCH} component={SearchView} />
      <Tab.Screen name={ScreenType.PROFILE} component={ProfileView} />
    </Tab.Navigator>
  );
}
