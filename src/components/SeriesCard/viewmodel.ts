import { RootParamsList, ScreenType } from '@/navigation/types';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export const useViewModel = (type: 'series' | 'movie') => {
  const navigation = useNavigation<NativeStackNavigationProp<RootParamsList>>();

  const onPress = (id: number) => {
    navigation.navigate(ScreenType.DETAIL, { tmdbId: id, type });
  };
  return { onPress };
};
