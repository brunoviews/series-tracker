import {
  Container,
  EmptyStateContainer,
  EmptyStateSubtitle,
  EmptyStateText,
  ErrorText,
  FilterButtonsContainer,
  FilterTypeButton,
  SearchInput,
  SearchInputContainer,
  SearchInputRow,
  StatusPillText,
  Title,
} from './styles';
import { useViewModel } from './viewmodel';
import AddShowModal from '@/components/AddShowModal';
import SearchResultCard from '@/components/SearchResultCard';
import { CustomSnackbar } from '@/components/Snackbar';
import type { SearchResult } from '@/lib/tmdb';
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
    selectedItem,
    mediaType,
    setMediaType,
    addSeries,
    addMovie,
    removeMovie,
    removeSeries,
    userSeriesMap,
    userMoviesMap,
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
              placeholder={t(
                mediaType === 'series'
                  ? 'search.placeholder'
                  : 'search.placeholderMovie',
              )}
              placeholderTextColor={theme.colors.textIcon.default.weak}
              value={searchText}
              onChangeText={setSearchText}
            />
          </SearchInputRow>
          <FilterButtonsContainer>
            <FilterTypeButton
              $active={mediaType === 'series'}
              onPress={() => setMediaType('series')}
            >
              <StatusPillText $active={mediaType === 'series'}>
                {t('search.filter.series')}
              </StatusPillText>
            </FilterTypeButton>
            <FilterTypeButton
              $active={mediaType === 'movie'}
              onPress={() => setMediaType('movie')}
            >
              <StatusPillText $active={mediaType === 'movie'}>
                {t('search.filter.movies')}
              </StatusPillText>
            </FilterTypeButton>
          </FilterButtonsContainer>
          {error && <ErrorText>{error}</ErrorText>}
        </SearchInputContainer>
        {isLoading ? (
          <ActivityIndicator color={theme.colors.textIcon.default.medium} />
        ) : (
          <FlatList<SearchResult>
            data={results}
            keyExtractor={(item) => String(item.id)}
            numColumns={2}
            columnWrapperStyle={{ gap: 12, justifyContent: 'center' }}
            contentContainerStyle={{ gap: 16, paddingBottom: 16 }}
            renderItem={({ item }) => (
              <SearchResultCard
                item={item}
                onAdd={() => openModal(item)}
                userSeriesMap={userSeriesMap}
                userMoviesMap={userMoviesMap}
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
          key={selectedItem?.id ?? 'empty'}
          isOpen={isModalOpen}
          onCancel={closeModal}
          onConfirm={mediaType === 'series' ? addSeries : addMovie}
          isLoading={isAdding}
          isRemoving={isRemoving}
          item={selectedItem}
          initialStatus={
            selectedItem
              ? mediaType === 'series'
                ? (userSeriesMap[selectedItem.id]?.status ?? null)
                : (userMoviesMap[selectedItem.id]?.status ?? null)
              : null
          }
          initialRating={
            selectedItem
              ? mediaType === 'series'
                ? (userSeriesMap[selectedItem.id]?.rating ?? null)
                : (userMoviesMap[selectedItem.id]?.rating ?? null)
              : null
          }
          onRemove={
            selectedItem &&
            (mediaType === 'series'
              ? userSeriesMap[selectedItem.id]
              : userMoviesMap[selectedItem.id])
              ? mediaType === 'series'
                ? removeSeries
                : removeMovie
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
