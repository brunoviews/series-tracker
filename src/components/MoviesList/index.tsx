import {
  EmptyStateContainer,
  EmptyStateIcon,
  EmptyStateSubtitle,
  EmptyStateText,
  ListContainer,
  PillCount,
  StatusDot,
  StatusFilterContainer,
  StatusPill,
  StatusPillText,
} from './styles';
import type { MoviesListProps } from './types';
import { useViewModel } from './viewmodel';
import SeriesCard from '@/components/SeriesCard';
import { theme } from '@/theme';
import { STATUS_COLORS } from '@/theme/statusColors';
import { ItemStatus } from '@/types/app.types';
import {
  BookmarkIcon,
  CheckCircleIcon,
  ProhibitIcon,
  TelevisionIcon,
} from 'phosphor-react-native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

const STATUSES: ItemStatus[] = [
  ItemStatus.Watching,
  ItemStatus.Completed,
  ItemStatus.Planned,
  ItemStatus.Dropped,
];

const STATUS_I18N_KEYS = {
  [ItemStatus.Watching]: 'series.status.watching',
  [ItemStatus.Completed]: 'series.status.completed',
  [ItemStatus.Planned]: 'series.status.planned',
  [ItemStatus.Dropped]: 'series.status.dropped',
} as const;

const EMPTY_STATUS_ICONS: Record<ItemStatus, React.ReactNode> = {
  [ItemStatus.Watching]: (
    <TelevisionIcon
      size={28}
      color={STATUS_COLORS[ItemStatus.Watching]}
      weight="duotone"
    />
  ),
  [ItemStatus.Completed]: (
    <CheckCircleIcon
      size={28}
      color={STATUS_COLORS[ItemStatus.Completed]}
      weight="duotone"
    />
  ),
  [ItemStatus.Planned]: (
    <BookmarkIcon
      size={28}
      color={STATUS_COLORS[ItemStatus.Planned]}
      weight="duotone"
    />
  ),
  [ItemStatus.Dropped]: (
    <ProhibitIcon
      size={28}
      color={STATUS_COLORS[ItemStatus.Dropped]}
      weight="duotone"
    />
  ),
};

const MoviesList = ({ userMovies, isLoading }: MoviesListProps) => {
  const { t } = useTranslation();
  const { sortByRecentAdded, activeStatus, setActiveStatus } =
    useViewModel(userMovies);

  const statusCountMap: Record<ItemStatus, number> = {
    [ItemStatus.Watching]: userMovies.filter(
      (m) => m.status === ItemStatus.Watching,
    ).length,
    [ItemStatus.Completed]: userMovies.filter(
      (m) => m.status === ItemStatus.Completed,
    ).length,
    [ItemStatus.Planned]: userMovies.filter(
      (m) => m.status === ItemStatus.Planned,
    ).length,
    [ItemStatus.Dropped]: userMovies.filter(
      (m) => m.status === ItemStatus.Dropped,
    ).length,
  };

  return (
    <ListContainer>
      <StatusFilterContainer>
        {STATUSES.map((status) => (
          <StatusPill
            key={status}
            active={status === activeStatus}
            $color={STATUS_COLORS[status]}
            onPress={() => setActiveStatus(status)}
          >
            <StatusDot
              $color={STATUS_COLORS[status]}
              active={status === activeStatus}
            />
            <StatusPillText
              active={status === activeStatus}
              $color={STATUS_COLORS[status]}
            >
              {t(STATUS_I18N_KEYS[status])}
            </StatusPillText>
            <PillCount
              active={status === activeStatus}
              $color={STATUS_COLORS[status]}
            >
              {statusCountMap[status]}
            </PillCount>
          </StatusPill>
        ))}
      </StatusFilterContainer>

      <FlatList
        data={sortByRecentAdded}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <SeriesCard
            series_name={item.movie_name}
            poster_path={item.poster_path}
            status={item.status}
            rating={item.rating}
            vote_average={item.vote_average}
            runtime={item.runtime}
            id={item.tmdb_movie_id}
            type="movie"
          />
        )}
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingTop: 10, paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          isLoading ? (
            <ActivityIndicator color={theme.colors.textIcon.default.medium} />
          ) : (
            <EmptyStateContainer>
              <EmptyStateIcon>
                {EMPTY_STATUS_ICONS[activeStatus]}
              </EmptyStateIcon>
              <EmptyStateText>{t('home.emptyMovies.title')}</EmptyStateText>
              <EmptyStateSubtitle>
                {t('home.emptyMovies.subtitle')}
              </EmptyStateSubtitle>
            </EmptyStateContainer>
          )
        }
      />
    </ListContainer>
  );
};

export default MoviesList;
