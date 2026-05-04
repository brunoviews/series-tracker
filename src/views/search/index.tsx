import {
  ClearButton,
  Container,
  EmptyStateContainer,
  EmptyStateIcon,
  EmptyStateSubtitle,
  EmptyStateTitle,
  ErrorText,
  FilterButtonContent,
  FilterButtonsContainer,
  FilterTypeButton,
  Header,
  HeaderAccent,
  HeaderCopy,
  HeaderIconBadge,
  HeaderTop,
  Kicker,
  ResultsCountPill,
  ResultsCountText,
  ResultsMetaRow,
  SearchInput,
  SearchInputRow,
  SearchPanel,
  SkeletonLine,
  SkeletonPoster,
  SkeletonResultCard,
  StatusPillText,
  Subtitle,
  Title,
} from './styles';
import { useViewModel } from './viewmodel';
import AddShowModal from '@/components/AddShowModal';
import SearchResultCard from '@/components/SearchResultCard';
import { CustomSnackbar } from '@/components/Snackbar';
import type { SearchResult } from '@/lib/tmdb';
import {
  MagnifyingGlassIcon,
  PopcornIcon,
  TelevisionIcon,
  XIcon,
} from 'phosphor-react-native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList } from 'react-native';
import { useTheme } from 'styled-components/native';

const SKELETON_ITEMS = [
  'search-skeleton-1',
  'search-skeleton-2',
  'search-skeleton-3',
  'search-skeleton-4',
  'search-skeleton-5',
  'search-skeleton-6',
];

function SearchSkeletonCard() {
  return (
    <SkeletonResultCard>
      <SkeletonPoster />
      <SkeletonLine $width="88%" />
      <SkeletonLine $width="44%" />
    </SkeletonResultCard>
  );
}

export default function SearchView() {
  const {
    searchText,
    setSearchText,
    clearSearchText,
    results,
    resultsCount,
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
    isError,
    isRemovingSnack,
    clearSnackMessage,
    hasSearchText,
    showInitialState,
    showEmptyState,
    showErrorState,
    showResultsMeta,
  } = useViewModel();
  const { t } = useTranslation();
  const theme = useTheme();

  const emptyStateTitle = showErrorState
    ? t('search.error.title')
    : showEmptyState
      ? t('search.empty.title')
      : t('search.initial.title');
  const emptyStateSubtitle = showErrorState
    ? error
    : showEmptyState
      ? t('search.empty.subtitle')
      : t('search.initial.subtitle');

  return (
    <>
      <Container>
        <Header>
          <HeaderTop>
            <HeaderCopy>
              <Kicker>{t('search.kicker')}</Kicker>
              <Title>{t('search.title')}</Title>
              <Subtitle>{t('search.subtitle')}</Subtitle>
            </HeaderCopy>
            <HeaderIconBadge>
              <MagnifyingGlassIcon
                size={22}
                color={theme.colors.textIcon.primary.main}
                weight="duotone"
              />
            </HeaderIconBadge>
          </HeaderTop>

          <SearchPanel>
            <SearchInputRow $hasError={!!error}>
              <MagnifyingGlassIcon
                size={18}
                color={theme.colors.textIcon.default.weak}
                weight="bold"
              />
              <SearchInput
                accessibilityLabel={t('search.inputLabel')}
                autoCapitalize="none"
                autoCorrect={false}
                clearButtonMode="never"
                placeholder={t(
                  mediaType === 'series'
                    ? 'search.placeholder'
                    : 'search.placeholderMovie',
                )}
                placeholderTextColor={theme.colors.textIcon.default.weak}
                returnKeyType="search"
                value={searchText}
                onChangeText={setSearchText}
              />
              {hasSearchText ? (
                <ClearButton
                  accessibilityLabel={t('search.clear')}
                  accessibilityRole="button"
                  onPress={clearSearchText}
                >
                  <XIcon
                    size={18}
                    color={theme.colors.textIcon.default.medium}
                    weight="bold"
                  />
                </ClearButton>
              ) : null}
            </SearchInputRow>

            <FilterButtonsContainer>
              <FilterTypeButton
                $active={mediaType === 'series'}
                accessibilityRole="button"
                accessibilityState={{ selected: mediaType === 'series' }}
                onPress={() => setMediaType('series')}
              >
                <FilterButtonContent>
                  <TelevisionIcon
                    size={16}
                    color={
                      mediaType === 'series'
                        ? theme.colors.textIcon.primary.main
                        : theme.colors.textIcon.default.medium
                    }
                    weight={mediaType === 'series' ? 'duotone' : 'regular'}
                  />
                  <StatusPillText $active={mediaType === 'series'}>
                    {t('search.filter.series')}
                  </StatusPillText>
                </FilterButtonContent>
              </FilterTypeButton>
              <FilterTypeButton
                $active={mediaType === 'movie'}
                accessibilityRole="button"
                accessibilityState={{ selected: mediaType === 'movie' }}
                onPress={() => setMediaType('movie')}
              >
                <FilterButtonContent>
                  <PopcornIcon
                    size={16}
                    color={
                      mediaType === 'movie'
                        ? theme.colors.textIcon.primary.main
                        : theme.colors.textIcon.default.medium
                    }
                    weight={mediaType === 'movie' ? 'duotone' : 'regular'}
                  />
                  <StatusPillText $active={mediaType === 'movie'}>
                    {t('search.filter.movies')}
                  </StatusPillText>
                </FilterButtonContent>
              </FilterTypeButton>
            </FilterButtonsContainer>

            {error && !showErrorState ? <ErrorText>{error}</ErrorText> : null}
          </SearchPanel>
        </Header>
        <HeaderAccent />

        {showResultsMeta ? (
          <ResultsMetaRow>
            <ResultsCountPill>
              <ResultsCountText>
                {isLoading
                  ? t('search.loading')
                  : t(
                      resultsCount === 1
                        ? 'search.resultsCount.one'
                        : 'search.resultsCount.other',
                      { count: resultsCount },
                    )}
              </ResultsCountText>
            </ResultsCountPill>
          </ResultsMetaRow>
        ) : null}

        {isLoading ? (
          <FlatList
            data={SKELETON_ITEMS}
            keyExtractor={(item) => item}
            numColumns={2}
            columnWrapperStyle={{ justifyContent: 'space-between' }}
            contentContainerStyle={{
              gap: 24,
              paddingBottom: 96,
              paddingHorizontal: 16,
              paddingTop: 16,
            }}
            keyboardShouldPersistTaps="handled"
            renderItem={() => <SearchSkeletonCard />}
            showsVerticalScrollIndicator={false}
          />
        ) : (
          <FlatList<SearchResult>
            data={results}
            keyExtractor={(item) => String(item.id)}
            numColumns={2}
            columnWrapperStyle={{ justifyContent: 'space-between' }}
            contentContainerStyle={{
              flexGrow:
                showInitialState || showEmptyState || showErrorState ? 1 : 0,
              gap: 24,
              paddingBottom: 96,
              paddingHorizontal: 16,
              paddingTop: resultsCount > 0 ? 16 : 0,
            }}
            keyboardShouldPersistTaps="handled"
            renderItem={({ item }) => (
              <SearchResultCard
                item={item}
                onAdd={() => openModal(item)}
                userSeriesMap={userSeriesMap}
                userMoviesMap={userMoviesMap}
                id={item.id}
              />
            )}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={
              <EmptyStateContainer>
                <EmptyStateIcon>
                  <MagnifyingGlassIcon
                    size={34}
                    color={theme.colors.textIcon.primary.main}
                    weight="duotone"
                  />
                </EmptyStateIcon>
                <EmptyStateTitle>{emptyStateTitle}</EmptyStateTitle>
                <EmptyStateSubtitle>{emptyStateSubtitle}</EmptyStateSubtitle>
              </EmptyStateContainer>
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
        isError={isError}
        duration={2500}
        isRemoving={isRemovingSnack}
      />
    </>
  );
}
