import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.spacing.md}px;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.typography.sizes.xl}px;
  font-weight: bold;
  margin-bottom: ${({ theme }) => theme.spacing.md}px;
  color: ${({ theme }) => theme.colors.text};
`;

export const Link = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  margin-top: ${({ theme }) => theme.spacing.sm}px;
`;
