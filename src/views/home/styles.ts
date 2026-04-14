import Text from '@/components/Text';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.fill.default.base};
  padding: ${({ theme }) => theme.spacing.md}px;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.typography['title-2'].fontSize}px;
  font-family: ${({ theme }) => theme.typography['title-2'].fontFamily};
  color: ${({ theme }) => theme.colors.textIcon.default.strong};
`;

export const WelcomeText = styled(Text).attrs({ variant: 'subheadline' })`
  color: ${({ theme }) => theme.colors.textIcon.default.weak};
`;

export const UserName = styled(Text).attrs({ variant: 'title-2' })`
  font-weight: 700;
`;

export const WelcomeContainer = styled.View`
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  margin-top: ${({ theme }) => theme.spacing.sm}px;
`;

export const HomeHeader = styled(SafeAreaView).attrs({
  edges: ['top'],
})`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.fill.default.base};
  padding: ${({ theme }) => theme.spacing.md}px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.stroke.default.weak};
`;

export const GreenDot = styled.View`
  width: 16px;
  height: 16px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.fill.semantic.success.main};
  position: absolute;
  bottom: -4px;
  right: 0px;
  border-width: 3px;
  border-color: ${({ theme }) => theme.colors.fill.default.base};
`;

export const AvatarContainer = styled.View`
  position: relative;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  border-width: 2px;
  border-color: ${({ theme }) => theme.colors.stroke.primary.weak};
  align-items: center;
  justify-content: center;
`;

export const SeriesStatusContainer = styled(ScrollView).attrs({
  contentContainerStyle: {
    paddingHorizontal: 16,
  },
})`
  margin-top: ${({ theme }) => theme.spacing.lg}px;
  padding-left: ${({ theme }) => theme.spacing.md}px;
`;

export const StatusFilterContainer = styled(ScrollView).attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    paddingVertical: 12,
    paddingRight: 16,
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

export const ItemsCounterContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.fill.default.strong};
  border-radius: 8px;
  padding: 4px 8px;
  margin-left: 8px;
`;

export const ItemsCounter = styled(Text).attrs({ variant: 'caption' })`
  color: ${({ theme }) => theme.colors.textIcon.default.medium};
  margin-left: 4px;
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
