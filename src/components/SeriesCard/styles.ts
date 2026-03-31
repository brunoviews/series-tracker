import type { SeriesStatus } from '@/types/database.types';
import Text from '@components/Text';
import styled from 'styled-components/native';

const getStatusColor = (status: SeriesStatus): string => {
  switch (status) {
    case 'watching':
      return '#f0dc2d';
    case 'completed':
      return '#C4C0FF';
    case 'planned':
      return '#D3D3D3';
    case 'dropped':
      return '#F2485A';
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
