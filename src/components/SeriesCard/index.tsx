import {
  BottomRow,
  CardContainer,
  getRatingColor,
  InfoContainer,
  MetaRow,
  MetaText,
  PosterImage,
  PosterPlaceholder,
  RatingContainer,
  RatingText,
  SeriesTitle,
  StatusAccentBar,
  StatusBadge,
  StatusBadgeText,
  TopRow,
  UserRatingBadge,
  UserRatingValue,
} from './styles';
import type { SeriesCardProps } from './types';
import { useViewModel } from './viewmodel';
import { STATUS_COLORS } from '@/theme/statusColors';
import { SeriesStatus } from '@/types/database.types';
import {
  BookmarkIcon,
  CheckCircleIcon,
  ImageSquareIcon,
  ProhibitIcon,
  StarIcon,
  TelevisionIcon,
  UserIcon,
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

const getStatusIcon = (status: SeriesStatus, color: string) => {
  const props = { size: 16, color, weight: 'fill' } as const;
  switch (status) {
    case SeriesStatus.Watching:
      return <TelevisionIcon {...props} />;
    case SeriesStatus.Completed:
      return <CheckCircleIcon {...props} />;
    case SeriesStatus.Planned:
      return <BookmarkIcon {...props} />;
    case SeriesStatus.Dropped:
      return <ProhibitIcon {...props} />;
  }
};

export default function SeriesCard({
  series_name,
  poster_path,
  status,
  rating,
  number_of_seasons,
  number_of_episodes,
  vote_average,
  id,
  type,
}: SeriesCardProps) {
  const { t } = useTranslation();
  const theme = useTheme();
  const { onPress } = useViewModel(type);

  const hasPoster = poster_path !== null;
  const hasProgress = number_of_episodes !== null && number_of_seasons !== null;

  return (
    <CardContainer onPress={() => onPress(id)} activeOpacity={0.9}>
      <StatusAccentBar $status={status} />
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
          {vote_average !== null && (
            <RatingContainer>
              <StarIcon size={16} color="#FBBF24" weight="fill" />
              <RatingText>{vote_average.toFixed(1)}</RatingText>
            </RatingContainer>
          )}
        </TopRow>

        {hasProgress && (
          <MetaRow>
            <MetaText>
              {number_of_seasons}{' '}
              {number_of_seasons === 1
                ? t('seriesCard.seasons')
                : t('seriesCard.seasonsPlural')}
              {' · '}
              {number_of_episodes} {t('seriesCard.episodes')}
            </MetaText>
          </MetaRow>
        )}

        <BottomRow>
          <StatusBadge $status={status}>
            {getStatusIcon(status, STATUS_COLORS[status])}
            <StatusBadgeText $color={STATUS_COLORS[status]}>
              {t(STATUS_I18N_KEYS[status])}
            </StatusBadgeText>
          </StatusBadge>
          {rating !== null && (
            <UserRatingBadge $color={getRatingColor(rating)}>
              <UserIcon
                size={11}
                color={getRatingColor(rating)}
                weight="fill"
              />
              <StarIcon
                size={12}
                color={getRatingColor(rating)}
                weight="fill"
              />
              <UserRatingValue $color={getRatingColor(rating)}>
                {rating.toFixed(1)}
              </UserRatingValue>
            </UserRatingBadge>
          )}
        </BottomRow>
      </InfoContainer>
    </CardContainer>
  );
}
