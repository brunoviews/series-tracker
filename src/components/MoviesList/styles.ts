import Text from '@/components/Text';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';

export const ListContainer = styled.View`
  flex: 1;
`;

export const StatusFilterContainer = styled(ScrollView).attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    paddingVertical: 12,
    paddingRight: 16,
    paddingTop: 20,
  },
})`
  flex-grow: 0;
`;

export const StatusPill = styled.TouchableOpacity<{
  active: boolean;
  $color: string;
}>`
  flex-direction: row;
  align-items: center;
  gap: 6px;
  padding: 8px 12px;
  margin-left: 8px;
  border-radius: 99px;
  background-color: ${({ theme, active, $color }) =>
    active ? `${$color}1A` : theme.colors.fill.default.medium};
  border-width: 1px;
  border-color: ${({ theme, active, $color }) =>
    active ? `${$color}66` : theme.colors.stroke.default.weak};
`;

export const StatusPillText = styled(Text).attrs({ variant: 'caption' })<{
  active: boolean;
  $color: string;
}>`
  color: ${({ theme, active, $color }) =>
    active ? $color : theme.colors.textIcon.default.medium};
  font-weight: 700;
`;

export const PillCount = styled(Text).attrs({ variant: 'caption' })<{
  active: boolean;
  $color: string;
}>`
  color: ${({ theme, active, $color }) =>
    active ? $color : theme.colors.textIcon.default.weak};
  background-color: ${({ theme, active, $color }) =>
    active ? `${$color}1A` : theme.colors.fill.default.base};
  padding: 1px 6px;
  border-radius: 10px;
  overflow: hidden;
  font-weight: 700;
`;

export const StatusDot = styled.View<{ $color: string; active: boolean }>`
  width: 6px;
  height: 6px;
  border-radius: 3px;
  background-color: ${({ $color }) => $color};
  opacity: ${({ active }) => (active ? 1 : 0.35)};
`;

export const EmptyStateContainer = styled.View`
  align-items: center;
  padding: ${({ theme }) => theme.spacing.lg}px;
  padding-top: 80px;
  gap: 12px;
`;

export const EmptyStateText = styled(Text).attrs({ variant: 'body-1-regular' })`
  color: ${({ theme }) => theme.colors.textIcon.default.main};
  text-align: center;
  font-weight: 700;
`;

export const EmptyStateSubtitle = styled(Text).attrs({
  variant: 'body-2-regular',
})`
  color: ${({ theme }) => theme.colors.textIcon.default.weak};
  text-align: center;
`;

export const EmptyStateIcon = styled.View`
  width: 64px;
  height: 64px;
  border-radius: 32px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.fill.default.strong};
  margin-bottom: 4px;
`;
