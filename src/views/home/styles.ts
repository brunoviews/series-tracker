import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import Text from '@/components/Text';
import { ScrollView } from 'react-native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.fill.default.main};
  align-items: left;
  padding: ${({ theme }) => theme.spacing.md}px;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.typography['title-2'].fontSize}px;
  font-family: ${({ theme }) => theme.typography['title-2'].fontFamily};
  color: ${({ theme }) => theme.colors.textIcon.default.strong};
`;

export const WelcomeText = styled.Text`
  font-size: ${({ theme }) => theme.typography['subheadline'].fontSize}px;
  color: ${({ theme }) => theme.colors.textIcon.default.weak};
`;

export const UserName = styled(Text).attrs({ variant: 'title-2' })`
  font-weight: 800;
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
  background-color: ${({ theme }) => theme.colors.components.bottomTab.fill};
  padding: ${({ theme }) => theme.spacing.md}px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.fill.default.medium};
`;

export const GreenDot = styled.View`
  width: 16px;
  height: 16px;
  border-radius: 8px;
  background-color: #22c55e;
  position: absolute;
  bottom: -4px;
  right: 0px;
  border-width: 3px;
  border-color: ${({ theme }) => theme.colors.components.bottomTab.fill};
`;

export const AvatarContainer = styled.View`
  position: relative;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border-width: 2px;
  border-color: #c4c0ff96;
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
  },
})`
  flex-grow: 0;
`;

export const StatusPill = styled.TouchableOpacity<{ active: boolean }>`
  padding: 12px 16px;
  margin-left: 8px;
  border-radius: 20px;
  background-color: ${({ theme, active }) =>
    active
      ? theme.colors.fill.primary.container
      : theme.colors.fill.default.medium};
`;

export const StatusPillText = styled(Text).attrs({ variant: 'caption' })<{
  active: boolean;
}>`
  color: ${({ theme, active }) =>
    active
      ? theme.colors.textIcon.default.strong
      : theme.colors.textIcon.default.medium};
  font-weight: 700;
`;

export const FABButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 24px;
  right: 0px;
  width: 56px;
  height: 56px;
  border-radius: 28px;
  background-color: ${({ theme }) => theme.colors.fill.primary.main};
  align-items: center;
  justify-content: center;
  ${({ theme }) => ({
    shadowColor: theme.colors.fill.primary.main,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 8,
  })}
`;
