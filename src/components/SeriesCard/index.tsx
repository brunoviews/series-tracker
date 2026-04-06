import {
  BottomRow,
  CardContainer,
  EpisodeBadge,
  EpisodeBadgeText,
  InfoContainer,
  PosterImage,
  PosterPlaceholder,
  RatingContainer,
  RatingText,
  SeriesTitle,
  StatusBadge,
  StatusBadgeText,
  TopRow,
} from './styles';
import type { SeriesCardProps } from './types';
import { useViewModel } from './viewmodel';
import { SeriesStatus } from '@/types/database.types';
import {
  BookmarkIcon,
  CheckCircleIcon,
  ImageSquareIcon,
  ProhibitIcon,
  StarIcon,
  TelevisionIcon,
} from 'phosphor-react-native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'styled-components/native';

type StatusI18nKey =
  | 'series.status.watching'
  | 'series.status.completed'
  | 'series.status.planned'
  | 'series.status.dropped';

const STATUS_I18N_KEYS: Record<SeriesStatus, StatusI18nKey> = {
  [SeriesStatus.Watching]: 'series.status.watching',
  [SeriesStatus.Completed]: 'series.status.completed',
  [SeriesStatus.Planned]: 'series.status.planned',
  [SeriesStatus.Dropped]: 'series.status.dropped',
};

const STATUS_ICONS: Record<SeriesStatus, React.ReactElement> = {
  [SeriesStatus.Watching]: (
    <TelevisionIcon size={16} color="#0a0a0a" weight="fill" />
  ),
  [SeriesStatus.Completed]: (
    <CheckCircleIcon size={16} color="#0a0a0a" weight="fill" />
  ),
  [SeriesStatus.Planned]: (
    <BookmarkIcon size={16} color="#0a0a0a" weight="fill" />
  ),
  [SeriesStatus.Dropped]: (
    <ProhibitIcon size={16} color="#0a0a0a" weight="fill" />
  ),
};

export default function SeriesCard({
  series_name,
  poster_path,
  status,
  rating,
  current_season,
  current_episode,
  id,
  type,
}: SeriesCardProps) {
  const { t } = useTranslation();
  const theme = useTheme();
  const { onPress } = useViewModel(type);

  const hasPoster = poster_path !== null;
  const hasProgress = current_season !== null && current_episode !== null;

  return (
    <CardContainer onPress={() => onPress(id)} activeOpacity={0.9}>
      {hasPoster ? (
        <PosterImage
          source={{ uri: `https://image.tmdb.org/t/p/w185${poster_path}` }}
          resizeMode="cover"
        />
      ) : (
        <PosterPlaceholder>
          <ImageSquareIcon
            size={28}
            color={theme.colors.textIcon.default.weak}
            weight="regular"
          />
        </PosterPlaceholder>
      )}

      <InfoContainer>
        <TopRow>
          <SeriesTitle numberOfLines={2}>{series_name}</SeriesTitle>
        </TopRow>

        {hasProgress && (
          <EpisodeBadge>
            <EpisodeBadgeText>
              {`S${current_season} · E${current_episode}`}
            </EpisodeBadgeText>
          </EpisodeBadge>
        )}

        <BottomRow>
          <StatusBadge $status={status}>
            {STATUS_ICONS[status]}
            <StatusBadgeText>{t(STATUS_I18N_KEYS[status])}</StatusBadgeText>
          </StatusBadge>
          {rating !== null && (
            <RatingContainer>
              <StarIcon size={16} color="#FBBF24" weight="fill" />
              <RatingText>{rating.toFixed(1)}</RatingText>
            </RatingContainer>
          )}
        </BottomRow>
      </InfoContainer>
    </CardContainer>
  );
}
