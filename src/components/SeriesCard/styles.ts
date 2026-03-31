import { SeriesStatus } from '@/types/database.types';
import Text from '@components/Text';
import styled from 'styled-components/native';

const getStatusColor = (status: SeriesStatus) => {
  switch (status) {
    case SeriesStatus.Watching:
      return '#FBBF24';
    case SeriesStatus.Completed:
      return '#2DD4BF';
    case SeriesStatus.Planned:
      return '#94A3B8';
    case SeriesStatus.Dropped:
      return '#F43F5E';
  }
};

export const CardContainer = styled.View`
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.fill.default.medium};
  border-radius: 12px;
  padding: 12px;
  margin-bottom: 12px;
  gap: 12px;
`;

export const PosterImage = styled.Image`
  width: 80px;
  height: 110px;
  border-radius: 8px;
`;

export const PosterPlaceholder = styled.View`
  width: 80px;
  height: 110px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.fill.default.strong};
  align-items: center;
  justify-content: center;
`;

export const InfoContainer = styled.View`
  flex: 1;
  justify-content: space-between;
`;

export const TopRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

export const SeriesTitle = styled(Text).attrs({ variant: 'headline' })`
  flex: 1;
  margin-right: 8px;
  color: ${({ theme }) => theme.colors.textIcon.default.strong};
`;

export const RatingContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 3px;
`;

export const RatingText = styled(Text).attrs({ variant: 'caption' })`
  color: ${({ theme }) => theme.colors.textIcon.default.medium};
  font-weight: 700;
`;

export const EpisodeBadge = styled.View`
  background-color: ${({ theme }) => theme.colors.fill.primary.variant};
  border-radius: 6px;
  padding: 4px 8px;
  align-self: flex-start;
  margin-top: 8px;
`;

export const EpisodeBadgeText = styled(Text).attrs({ variant: 'caption' })`
  color: ${({ theme }) => theme.colors.textIcon.default.strong};
  font-weight: 700;
`;

export const BottomRow = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 6px;
  margin-top: 8px;
`;

export const StatusDot = styled.View<{ $status: SeriesStatus }>`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: ${({ $status }) => getStatusColor($status)};
`;

export const StatusLabel = styled(Text).attrs({ variant: 'caption' })`
  color: ${({ theme }) => theme.colors.textIcon.default.strong};
  font-weight: 700;
`;
