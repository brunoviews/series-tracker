import { STATUS_COLORS } from '@/theme/statusColors';
import { SeriesStatus } from '@/types/database.types';
import Text from '@components/Text';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex: 1;
  overflow: hidden;
`;

export const CardContainer = styled.ImageBackground`
  flex-direction: row;
  padding: 16px;
  margin-bottom: 4px;
  width: 155px;
  height: 200px;
`;

export const ResultTitle = styled(Text).attrs({
  variant: 'caption',
  numberOfLines: 1,
})`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.textIcon.default.strong};
`;

export const ResultYear = styled(Text).attrs({ variant: 'label' })`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.textIcon.default.weak};
  text-align: left;
`;

export const ResultRating = styled(Text).attrs({ variant: 'label' })`
  font-weight: bold;
  color: white;
`;

export const RatingContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 2px;
  background-color: rgba(0, 0, 0, 0.8);
  padding: 2px 4px;
  border-radius: 4px;
  position: absolute;
  bottom: 8px;
  left: 6px;
`;
export const YearContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 4px;
  gap: 2px;
`;

export const CurrentStatus = styled(Text).attrs({ variant: 'label' })`
  color: #0a0a0a;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 0.5px;
`;

export const CurrentStatusBadge = styled.View<{ status: SeriesStatus }>`
  flex-direction: row;
  align-items: center;
  gap: 4px;
  padding: 3px 8px 3px 6px;
  border-radius: 99px;
  position: absolute;
  top: 8px;
  left: 6px;
  background-color: ${({ status }) => STATUS_COLORS[status] ?? '#999'};
`;
