import { STATUS_COLORS } from '@/theme/statusColors';
import { ItemStatus } from '@/types/app.types';
import Text from '@components/Text';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.88,
})`
  width: 48%;
  gap: ${({ theme }) => theme.spacing.sm}px;
`;

export const CardContainer = styled.ImageBackground.attrs({
  resizeMode: 'cover',
})`
  width: 100%;
  aspect-ratio: 0.68;
  border-radius: ${({ theme }) => theme.borderRadius.md}px;
  overflow: hidden;
  justify-content: flex-end;
  background-color: ${({ theme }) => theme.colors.fill.default.weak};
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.stroke.default.subtle};
`;

export const ResultTitle = styled(Text).attrs({
  variant: 'body-2-medium',
  numberOfLines: 1,
})`
  color: ${({ theme }) => theme.colors.textIcon.default.strong};
`;

export const ResultYear = styled(Text).attrs({ variant: 'caption' })`
  color: ${({ theme }) => theme.colors.textIcon.default.medium};
  text-align: left;
`;

export const ResultRating = styled(Text).attrs({ variant: 'label' })`
  color: ${({ theme }) => theme.colors.textIcon.default.strong};
`;

export const RatingContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 2px;
  padding: 4px 7px;
  border-radius: ${({ theme }) => theme.borderRadius.full}px;
  position: absolute;
  bottom: 8px;
  left: 8px;
  background-color: ${({ theme }) => theme.colors.fill.default.dim};
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.stroke.default.subtle};
`;

export const GradientOverlay = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 96px;
`;
export const YearContainer = styled.View`
  flex-direction: row;
  align-items: center;
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
  background-color: ${({ theme }) => theme.colors.fill.default.dim};
  border-width: 1px;
  border-color: ${({ status }) => STATUS_COLORS[status]};
`;
