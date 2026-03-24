import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { AuthStackParamList } from './types';
import LoginView from '../views/login';
import RegisterView from '../views/register';

const Stack = createNativeStackNavigator<AuthStackParamList>();

export default function AuthNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginView} />
      <Stack.Screen name="Register" component={RegisterView} />
    </Stack.Navigator>
  );
}
