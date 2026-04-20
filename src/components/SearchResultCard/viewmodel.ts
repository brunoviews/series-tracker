import { RootParamsList, ScreenType } from '@/navigation/types';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export const useViewModel = (mediaType: 'series' | 'movie') => {
  const navigation = useNavigation<NativeStackNavigationProp<RootParamsList>>();
  const handleCardPress = (id: number) => {
    navigation.navigate(ScreenType.DETAIL, { tmdbId: id, type: mediaType });
  };
  return { handleCardPress };
};
