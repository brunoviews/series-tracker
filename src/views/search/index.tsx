import {
  Container,
  EmptyStateContainer,
  EmptyStateSubtitle,
  EmptyStateText,
  ErrorText,
  SearchInput,
  SearchInputContainer,
  SearchInputRow,
  Title,
} from './styles';
import { useViewModel } from './viewmodel';
import AddShowModal from '@/components/AddShowModal';
import SearchResultCard from '@/components/SearchResultCard';
import { CustomSnackbar } from '@/components/Snackbar';
import type { TmdbSeries } from '@/lib/tmdb';
import { theme } from '@/theme';
import { MagnifyingGlassIcon } from 'phosphor-react-native';
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
    isRemovingSnack,
    clearSnackMessage,
  } = useViewModel();
  const { t } = useTranslation();

  return (
    <>
      <Container>
        <Title>{t('search.title')}</Title>
        <SearchInputContainer>
          <SearchInputRow hasError={!!error}>
            <MagnifyingGlassIcon
              size={18}
              color={theme.colors.textIcon.default.weak}
              weight="bold"
            />
            <SearchInput
              placeholder={t('search.placeholder')}
              placeholderTextColor={theme.colors.textIcon.default.weak}
              value={searchText}
              onChangeText={setSearchText}
            />
          </SearchInputRow>
          {error && <ErrorText>{error}</ErrorText>}
        </SearchInputContainer>
        {isLoading ? (
          <ActivityIndicator color={theme.colors.textIcon.default.medium} />
        ) : (
          <FlatList<TmdbSeries>
            data={results}
            keyExtractor={(item) => String(item.id)}
            numColumns={2}
            columnWrapperStyle={{ gap: 12, justifyContent: 'center' }}
            contentContainerStyle={{ gap: 16, paddingBottom: 16 }}
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
            ListEmptyComponent={
              searchText.length > 0 ? (
                <EmptyStateContainer>
                  <MagnifyingGlassIcon
                    size={32}
                    color={theme.colors.textIcon.default.weak}
                    weight="duotone"
                  />
                  <EmptyStateText>{t('search.empty.title')}</EmptyStateText>
                  <EmptyStateSubtitle>
                    {t('search.empty.subtitle')}
                  </EmptyStateSubtitle>
                </EmptyStateContainer>
              ) : null
            }
          />
        )}

        <AddShowModal
          isOpen={isModalOpen}
          onCancel={closeModal}
          onConfirm={addSeries}
          isLoading={isAdding}
          isRemoving={isRemoving}
          item={selectedSerie}
          initialStatus={
            selectedSerie
              ? (userSeriesMap[selectedSerie.id]?.status ?? null)
              : null
          }
          initialRating={
            selectedSerie
              ? (userSeriesMap[selectedSerie.id]?.rating ?? null)
              : null
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
        isRemoving={isRemovingSnack}

      />
    </>
  );
}
