import {
  Container,
  ErrorText,
  SearchInput,
  SearchInputContainer,
  Title,
} from './styles';
import { useViewModel } from './viewmodel';
import AddSerieModal from '@/components/AddSerieModal';
import SearchResultCard from '@/components/SearchResultCard';
import { CustomSnackbar } from '@/components/Snackbar';
import type { TmdbSeries } from '@/lib/tmdb';
import { theme } from '@/theme';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { ActivityIndicator, FlatList } from 'react-native';

export default function SearchView() {
  const {
    searchText,
    setSearchText,
    results,
    isLoading,
    isAdding,
    isRemoving,
    isModalOpen,
    openModal,
    closeModal,
    selectedSerie,
    addSeries,
    removeSeries,
    userSeriesMap,
    error,
    snackMessage,
    isSuccess,
    clearSnackMessage,
  } = useViewModel();
  const { t } = useTranslation();

  return (
    <>
      <Container>
        <Title>{t('search.title')}</Title>
        <SearchInputContainer>
          <SearchInput
            placeholder={t('search.placeholder')}
            placeholderTextColor={theme.colors.textIcon.default.weak}
            value={searchText}
            onChangeText={setSearchText}
            hasError={!!error}
          />
          {error && <ErrorText>{error} </ErrorText>}
        </SearchInputContainer>
        {isLoading ? (
          <ActivityIndicator color={theme.colors.textIcon.default.medium} />
        ) : (
          <FlatList<TmdbSeries>
            data={results}
            keyExtractor={(item) => String(item.id)}
            numColumns={2}
            columnWrapperStyle={{ gap: 32, justifyContent: 'center' }}
            contentContainerStyle={{ gap: 32, paddingBottom: 16 }}
            renderItem={({ item }) => (
              <SearchResultCard
                serie={item}
                onAdd={() => openModal(item)}
                userSeriesMap={userSeriesMap}
                id={item.id}
              />
            )}
            style={{ flex: 1 }}
            showsVerticalScrollIndicator={false}
          />
        )}

        <AddSerieModal
          isOpen={isModalOpen}
          onCancel={closeModal}
          onConfirm={addSeries}
          isLoading={isAdding}
          isRemoving={isRemoving}
          item={selectedSerie}
          initialStatus={
            selectedSerie ? (userSeriesMap[selectedSerie.id] ?? null) : null
          }
          onRemove={
            selectedSerie && userSeriesMap[selectedSerie.id]
              ? removeSeries
              : undefined
          }
        />
      </Container>
      <CustomSnackbar
        visible={!!snackMessage}
        onDismiss={clearSnackMessage}
        message={snackMessage ?? ''}
        isSuccess={isSuccess}
        isError={!isSuccess}
        duration={2500}
      />
    </>
  );
}
