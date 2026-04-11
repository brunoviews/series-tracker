import Text from '@/components/Text';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView).attrs({
  edges: ['top'],
})`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.fill.default.main};
  padding: 16px;
  gap: 32px;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.typography['title-1'].fontSize}px;
  font-weight: ${({ theme }) => theme.typography['title-1'].fontWeight};
  color: ${({ theme }) => theme.colors.textIcon.default.strong};
  text-align: center;
`;

export const SearchInput = styled.TextInput<{ hasError: boolean }>`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.md}px;
  border-width: 1px;
  border-color: ${({ theme, hasError }) =>
    hasError
      ? theme.colors.textIcon.semantic.error.main
      : theme.colors.stroke.primary.weak};
  border-radius: 12px;
  margin-top: ${({ theme }) => theme.spacing.md}px;
  color: ${({ theme }) => theme.colors.textIcon.default.strong};
  font-size: 14px;
`;

export const SearchInputContainer = styled.View`
  width: 100%;
  flex-direction: column;
  gap: 8px;
`;
export const ErrorText = styled(Text).attrs({
  variant: 'caption',
  accessibilityRole: 'alert',
})`
  color: ${({ theme }) => theme.colors.textIcon.semantic.error.main};
  text-align: left;
  padding-left: 16px;
`;

export const NoResultsText = styled.Text`
  color: ${({ theme }) => theme.colors.textIcon.default.strong};
  font-size: 16px;
  text-align: left;
  margin-top: 16px;
`;
