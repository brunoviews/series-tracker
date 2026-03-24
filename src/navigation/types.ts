import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

// ─── Auth Stack ─────────────────────────────────────────────────────────────
export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
};

// ─── Main Tabs ───────────────────────────────────────────────────────────────
export type MainTabParamList = {
  Home: undefined;
  Search: undefined;
  Profile: undefined;
};

// ─── Screen props helpers ────────────────────────────────────────────────────
export type LoginScreenProps = NativeStackScreenProps<AuthStackParamList, 'Login'>;
export type RegisterScreenProps = NativeStackScreenProps<AuthStackParamList, 'Register'>;

export type HomeScreenProps = BottomTabScreenProps<MainTabParamList, 'Home'>;
export type SearchScreenProps = BottomTabScreenProps<MainTabParamList, 'Search'>;
export type ProfileScreenProps = BottomTabScreenProps<MainTabParamList, 'Profile'>;
