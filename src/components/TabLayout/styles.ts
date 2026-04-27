import Text from '@/components/Text';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Header = styled(SafeAreaView).attrs({
  edges: ['top'],
})`
  background-color: ${({ theme }) => theme.colors.fill.default.base};
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.stroke.default.weak};
`;

export const HeaderInner = styled.View`
  padding: ${({ theme }) => theme.spacing.md}px;
  padding-bottom: ${({ theme }) => theme.spacing.sm}px;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.md}px;
`;

export const HeaderLeft = styled.View`
  flex: 1;
  gap: 6px;
`;

export const Kicker = styled(Text).attrs({ variant: 'overline' })`
  color: ${({ theme }) => theme.colors.textIcon.default.weak};
`;

export const TitleRow = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const Title = styled(Text).attrs({ variant: 'title-1' })`
  color: ${({ theme }) => theme.colors.textIcon.default.strong};
`;

export const CountPill = styled.View`
  padding: 4px 10px;
  border-radius: ${({ theme }) => theme.borderRadius.full}px;
  background-color: ${({ theme }) => theme.colors.fill.primary.variant};
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.stroke.primary.weak};
`;

export const CountText = styled(Text).attrs({ variant: 'label' })`
  color: ${({ theme }) => theme.colors.textIcon.primary.main};
`;

export const Subtitle = styled(Text).attrs({ variant: 'body-2-regular' })`
  color: ${({ theme }) => theme.colors.textIcon.default.medium};
`;

export const HeaderRight = styled.View`
  align-items: flex-end;
  justify-content: flex-end;
`;

export const IconBadge = styled.View`
  width: 44px;
  height: 44px;
  border-radius: ${({ theme }) => theme.borderRadius.full}px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.fill.default.weak};
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.stroke.default.weak};
`;

export const Accent = styled(LinearGradient).attrs(({ theme }) => ({
  colors: [
    'rgba(45, 212, 191, 0.0)',
    theme.colors.fill.primary.main,
    'rgba(45, 212, 191, 0.0)',
  ],
  start: { x: 0, y: 0.5 },
  end: { x: 1, y: 0.5 },
}))`
  height: 2px;
  opacity: 0.35;
`;

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.fill.default.base};
  padding: ${({ theme }) => theme.spacing.md}px;
`;

