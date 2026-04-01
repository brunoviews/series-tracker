import Text from '@components/Text';
import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.md}px;
  gap: 16px;
  width: 100%;
  border-radius: ${({ theme }) => theme.borderRadius.lg}px;
`;

export const Title = styled(Text).attrs({ variant: 'title-1' })`
  text-align: center;
  width: 100%;
`;

export const ErrorText = styled.Text`
  color: ${({ theme }) => theme.colors.textIcon.semantic.error.main};
  font-size: ${({ theme }) => theme.typography['body-2-regular'].fontSize}px;
`;

export const Link = styled.Text`
  color: ${({ theme }) => theme.colors.textIcon.default.strong};
  font-size: ${({ theme }) => theme.typography['body-1-regular'].fontSize}px;
  text-decoration: underline;
`;

export const CustomContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.fill.default.base};
  padding: ${({ theme }) => theme.spacing.md}px;
  flex: 1;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;
