import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

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

export const SearchInput = styled.TextInput`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.md}px;
  border-width: 1px;
  border-color: #8781ff7d;
  border-radius: 12px;
  margin-top: ${({ theme }) => theme.spacing.md}px;
  color: ${({ theme }) => theme.colors.textIcon.default.strong};
  font-size: 14px;
`;
