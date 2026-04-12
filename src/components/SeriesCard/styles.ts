import { STATUS_COLORS } from '@/theme/statusColors';
import { SeriesStatus } from '@/types/database.types';
import Text from '@components/Text';
import styled from 'styled-components/native';

const getStatusColor = (status: SeriesStatus) => STATUS_COLORS[status];

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
`;

export const RatingText = styled(Text).attrs({ variant: 'caption' })`
  color: ${({ theme }) => theme.colors.textIcon.default.medium};
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
  font-weight: 800;
`;

export const BottomRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 8px;
`;

export const StatusBadge = styled.View<{ $status: SeriesStatus }>`
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

export const UserRatingBadge = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 3px;
`;

export const UserRatingLabel = styled(Text).attrs({ variant: 'caption' })`
  color: ${({ theme }) => theme.colors.textIcon.default.medium};
  font-weight: 700;
`;

export const UserRatingValue = styled(Text).attrs({ variant: 'caption' })<{
  $color: string;
}>`
  color: ${({ $color }) => $color};
  font-weight: 700;
`;
