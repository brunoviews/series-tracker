import { Container, SearchInput, Title } from './styles';
import { useViewModel } from './viewmodel';
import SearchResultCard from '@/components/SearchResultCard';
import { TmdbSeries } from '@/lib/tmdb';
import { theme } from '@/theme';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { ActivityIndicator, FlatList } from 'react-native';

export default function SearchView() {
  const { searchText, setSearchText, results, isLoading } = useViewModel();
  const { t } = useTranslation();

  return (
    <Container>
      <Title>{t('search.title')}</Title>
      <SearchInput
        placeholder={t('search.placeholder')}
        placeholderTextColor={theme.colors.textIcon.default.weak}
        value={searchText}
        onChangeText={setSearchText}
      />
      {isLoading ? (
        <ActivityIndicator color={theme.colors.textIcon.default.medium} />
      ) : (
        <FlatList<TmdbSeries>
          data={results}
          keyExtractor={(item) => String(item.id)}
          numColumns={2}
          columnWrapperStyle={{ gap: 12, justifyContent: 'center' }}
          contentContainerStyle={{ gap: 12, paddingBottom: 16 }}
          renderItem={({ item }) => <SearchResultCard {...item} />}
          style={{ flex: 1 }}
        />
      )}
    </Container>
  );
}
