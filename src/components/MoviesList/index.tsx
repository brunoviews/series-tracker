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
import SeriesCard from '@/components/SeriesCard';
import { theme } from '@/theme';
import { STATUS_COLORS } from '@/theme/statusColors';
import { SeriesStatus } from '@/types/app.types';
import {
  BookmarkIcon,
  CheckCircleIcon,
  ProhibitIcon,
  TelevisionIcon,
} from 'phosphor-react-native';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

const STATUSES: SeriesStatus[] = [
  SeriesStatus.Watching,
  SeriesStatus.Completed,
  SeriesStatus.Planned,
  SeriesStatus.Dropped,
];

const STATUS_I18N_KEYS = {
  [SeriesStatus.Watching]: 'series.status.watching',
  [SeriesStatus.Completed]: 'series.status.completed',
  [SeriesStatus.Planned]: 'series.status.planned',
  [SeriesStatus.Dropped]: 'series.status.dropped',
} as const;

const EMPTY_STATUS_ICONS: Record<SeriesStatus, React.ReactNode> = {
  [SeriesStatus.Watching]: (
    <TelevisionIcon
      size={28}
      color={STATUS_COLORS[SeriesStatus.Watching]}
      weight="duotone"
    />
  ),
  [SeriesStatus.Completed]: (
    <CheckCircleIcon
      size={28}
      color={STATUS_COLORS[SeriesStatus.Completed]}
      weight="duotone"
    />
  ),
  [SeriesStatus.Planned]: (
    <BookmarkIcon
      size={28}
      color={STATUS_COLORS[SeriesStatus.Planned]}
      weight="duotone"
    />
  ),
  [SeriesStatus.Dropped]: (
    <ProhibitIcon
      size={28}
      color={STATUS_COLORS[SeriesStatus.Dropped]}
      weight="duotone"
    />
  ),
};

const MoviesList = ({ userMovies, isLoading }: MoviesListProps) => {
  const { t } = useTranslation();
  const [activeStatus, setActiveStatus] = useState<SeriesStatus>(
    SeriesStatus.Watching,
  );

  const filteredMovies = userMovies.filter((m) => m.status === activeStatus);

  const statusCountMap: Record<SeriesStatus, number> = {
    [SeriesStatus.Watching]: userMovies.filter(
      (m) => m.status === SeriesStatus.Watching,
    ).length,
    [SeriesStatus.Completed]: userMovies.filter(
      (m) => m.status === SeriesStatus.Completed,
    ).length,
    [SeriesStatus.Planned]: userMovies.filter(
      (m) => m.status === SeriesStatus.Planned,
    ).length,
    [SeriesStatus.Dropped]: userMovies.filter(
      (m) => m.status === SeriesStatus.Dropped,
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
        data={filteredMovies}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <SeriesCard
            series_name={item.movie_name}
            poster_path={item.poster_path}
            status={item.status}
            rating={item.rating}
            vote_average={item.vote_average}
            id={item.tmdb_movie_id}
            type="movie"
          />
        )}
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingTop: 4, paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          isLoading ? (
            <ActivityIndicator color={theme.colors.textIcon.default.medium} />
          ) : (
            <EmptyStateContainer>
              <EmptyStateIcon>
                {EMPTY_STATUS_ICONS[activeStatus]}
              </EmptyStateIcon>
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
