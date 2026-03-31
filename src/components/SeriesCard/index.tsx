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
  StatusDot,
  StatusLabel,
  TopRow,
} from './styles';
import type { SeriesCardProps } from './types';
import {
  CheckCircleIcon,
  ImageSquareIcon,
  StarIcon,
} from 'phosphor-react-native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'styled-components/native';

const STATUS_I18N_KEYS = {
  watching: 'series.status.watching',
  completed: 'series.status.completed',
  planned: 'series.status.planned',
  dropped: 'series.status.dropped',
} as const;

export default function SeriesCard({
  series_name,
  poster_path,
  status,
  rating,
  current_season,
  current_episode,
}: SeriesCardProps) {
  const { t } = useTranslation();
  const theme = useTheme();

  const hasPoster = poster_path !== null;
  const hasProgress = current_season !== null && current_episode !== null;

  return (
    <CardContainer>
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
          {rating !== null && (
            <RatingContainer>
              <StarIcon size={16} color="#FBBF24" weight="fill" />
              <RatingText>{rating.toFixed(1)}</RatingText>
            </RatingContainer>
          )}
        </TopRow>

        {hasProgress && (
          <EpisodeBadge>
            <EpisodeBadgeText>
              {`S${current_season} · E${current_episode}`}
            </EpisodeBadgeText>
          </EpisodeBadge>
        )}

        <BottomRow>
          {status === 'completed' ? (
            <CheckCircleIcon size={16} color="#22C55E" weight="bold" />
          ) : (
            <StatusDot $status={status} />
          )}
          <StatusLabel>{t(STATUS_I18N_KEYS[status])}</StatusLabel>
        </BottomRow>
      </InfoContainer>
    </CardContainer>
  );
}
