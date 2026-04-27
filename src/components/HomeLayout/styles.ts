import Text from '@/components/Text';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.fill.default.base};
  padding: ${({ theme }) => theme.spacing.md}px;
`;

export const TabContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.fill.default.base};
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

export const AvatarCircle = styled.View`
  width: 44px;
  height: 44px;
  border-radius: ${({ theme }) => theme.borderRadius.full}px;
  background-color: ${({ theme }) => theme.colors.fill.primary.variant};
  align-items: center;
  justify-content: center;
  border-width: 2px;
  border-color: ${({ theme }) => theme.colors.stroke.primary.weak};
`;

export const AvatarInitials = styled(Text).attrs({ variant: 'label' })`
  color: ${({ theme }) => theme.colors.textIcon.primary.main};
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
