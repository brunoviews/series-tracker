import {
  EmptyStateContainer,
  EmptyStateIcon,
  EmptyStateSubtitle,
  EmptyStateText,
  ListContainer,
} from './styles';
import type { MoviesListProps } from './types';
import SeriesCard from '@/components/SeriesCard';
import { theme } from '@/theme';
import { FilmSlateIcon } from 'phosphor-react-native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

const EMPTY_ICON = (
  <FilmSlateIcon
    size={28}
    color={theme.colors.textIcon.default.medium}
    weight="duotone"
  />
);

const MoviesList = ({ userMovies, isLoading }: MoviesListProps) => {
  const { t } = useTranslation();

  return (
    <ListContainer>
      <FlatList
        data={userMovies}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <SeriesCard {...item} id={item.tmdb_series_id} type="movie" />
        )}
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingTop: 4, paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          isLoading ? (
            <ActivityIndicator color={theme.colors.textIcon.default.medium} />
          ) : (
            <EmptyStateContainer>
              <EmptyStateIcon>{EMPTY_ICON}</EmptyStateIcon>
              <EmptyStateText>{t('home.empty.title')}</EmptyStateText>
              <EmptyStateSubtitle>
                {t('home.empty.subtitle')}
              </EmptyStateSubtitle>
            </EmptyStateContainer>
          )
        }
      />
    </ListContainer>
  );
};

export default MoviesList;
