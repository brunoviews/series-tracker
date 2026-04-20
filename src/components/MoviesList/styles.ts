import Text from '@/components/Text';
import styled from 'styled-components/native';

export const ListContainer = styled.View`
  flex: 1;
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
