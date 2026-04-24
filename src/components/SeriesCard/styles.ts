import { STATUS_COLORS } from '@/theme/statusColors';
import { ItemStatus } from '@/types/app.types';
import Text from '@components/Text';
import styled from 'styled-components/native';

const getStatusColor = (status: ItemStatus) => STATUS_COLORS[status];

export const getRatingColor = (rating: number): string => {
  if (rating >= 7) return '#2DD4BF';
  if (rating >= 5) return '#FB923C';
  if (rating >= 3) return '#fb553c';
  return '#FB7185';
};

export const CardContainer = styled.TouchableOpacity`
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.fill.default.medium};
  border-radius: 12px;
  padding: 12px;
  margin-bottom: 12px;
  gap: 12px;
  border-width: 1px;
  border-color: rgba(148, 163, 184, 0.1);
  overflow: hidden;
`;

export const StatusAccentBar = styled.View<{ $status: ItemStatus }>`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 3px;
  background-color: ${({ $status }) => getStatusColor($status)};
`;

export const PosterImage = styled.Image`
  width: 85px;
  height: 120px;
  border-radius: 8px;
`;

export const PosterPlaceholder = styled.View`
  width: 85px;
  height: 120px;
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
  align-items: center;
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
  background-color: rgba(251, 191, 36, 0.12);
  padding: 3px 7px;
  border-radius: 99px;
`;

export const RatingText = styled(Text).attrs({ variant: 'caption' })`
  color: #fbbf24;
  font-weight: 700;
`;

export const MetaRow = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 6px;
`;

export const MetaText = styled(Text).attrs({ variant: 'label' })`
  color: ${({ theme }) => theme.colors.textIcon.default.main};
  letter-spacing: 0.2px;
  font-weight: 600;
`;

export const BottomRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 8px;
`;

export const StatusBadge = styled.View<{ $status: ItemStatus }>`
  flex-direction: row;
  align-items: center;
  gap: 4px;
  padding: 3px 8px 3px 6px;
  border-radius: 99px;
  background-color: ${({ $status }) => `${getStatusColor($status)}26`};
  border-width: 1px;
  border-color: ${({ $status }) => `${getStatusColor($status)}99`};
`;

export const StatusBadgeText = styled(Text).attrs({ variant: 'caption' })<{
  $color: string;
}>`
  color: ${({ $color }) => $color};
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const UserRatingBadge = styled.View<{ $color: string }>`
  flex-direction: row;
  align-items: center;
  gap: 3px;
  background-color: ${({ $color }) => `${$color}1A`};
  padding: 3px 7px;
  border-radius: 99px;
  border-width: 1px;
  border-color: ${({ $color }) => `${$color}66`};
`;

export const UserRatingValue = styled(Text).attrs({ variant: 'caption' })<{
  $color: string;
}>`
  color: ${({ $color }) => $color};
  font-weight: 700;
`;
