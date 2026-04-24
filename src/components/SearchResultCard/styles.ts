import { STATUS_COLORS } from '@/theme/statusColors';
import { ItemStatus } from '@/types/app.types';
import Text from '@components/Text';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex: 1;
`;

export const CardContainer = styled.ImageBackground.attrs({
  resizeMode: 'cover',
})`
  width: 180px;
  height: 210px;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 4px;
  justify-content: flex-end;
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
  padding: 3px 6px;
  border-radius: 4px;
  position: absolute;
  bottom: 8px;
  left: 8px;
`;

export const GradientOverlay = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 80px;
`;
export const YearContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 4px;
  gap: 2px;
`;

export const CurrentStatus = styled(Text).attrs({ variant: 'label' })<{
  $color: string;
}>`
  color: ${({ $color }) => $color};
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 0.5px;
`;

export const CurrentStatusBadge = styled.View<{ status: ItemStatus }>`
  flex-direction: row;
  align-items: center;
  gap: 4px;
  padding: 4px 6px;
  border-radius: 99px;
  position: absolute;
  top: 8px;
  left: 8px;
  background-color: rgba(8, 12, 18, 0.85);
  border-width: 1px;
  border-color: ${({ status }) => STATUS_COLORS[status]};
`;
