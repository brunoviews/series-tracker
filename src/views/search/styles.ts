import Text from '@/components/Text';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView).attrs({
  edges: ['top'],
})`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.fill.default.main};
  padding: 16px;
  gap: 16px;
`;

export const Title = styled(Text).attrs({ variant: 'title-1' })`
  color: ${({ theme }) => theme.colors.textIcon.default.strong};
`;

export const FilterButtonsContainer = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
`;

export const FilterTypeButton = styled.TouchableOpacity<{
  $active: boolean;
}>`
  border-width: 1px;
  border-color: ${({ theme, $active }) =>
    $active
      ? theme.colors.stroke.primary.main
      : theme.colors.stroke.default.weak};
  background-color: ${({ theme, $active }) =>
    $active
      ? theme.colors.fill.default.bright
      : theme.colors.fill.default.medium};
  padding: 12px 40px;
  border-radius: 12px;
  margin-top: 8px;
  
`;

export const StatusPillText = styled(Text).attrs({ variant: 'label' })<{
  $active: boolean;
}>`
  color: ${({ theme, $active }) =>
    $active
      ? theme.colors.textIcon.primary.main
      : theme.colors.textIcon.default.weak};
  font-weight: 700;
  text-transform: uppercase;
`;

export const SearchInputRow = styled.View<{ hasError: boolean }>`
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 0 ${({ theme }) => theme.spacing.md}px;
  border-width: 1px;
  border-color: ${({ theme, hasError }) =>
    hasError
      ? theme.colors.textIcon.semantic.error.main
      : theme.colors.stroke.primary.weak};
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.components.input.fill};
  gap: 8px;
`;

export const SearchInput = styled.TextInput`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.md}px 0;
  color: ${({ theme }) => theme.colors.textIcon.default.strong};
  font-size: 14px;
  font-family: 'SpaceMono_400Regular';
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
  padding-left: 4px;
`;

export const EmptyStateContainer = styled.View`
  align-items: center;
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

export const NoResultsText = styled.Text`
  color: ${({ theme }) => theme.colors.textIcon.default.strong};
  font-size: 16px;
  text-align: left;
  margin-top: 16px;
`;
