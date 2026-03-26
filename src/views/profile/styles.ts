import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.surface};
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.typography['title-1'].fontSize}px;
  font-weight: ${({ theme }) => theme.typography['title-1'].fontWeight};
  color: ${({ theme }) => theme.colors.textIcon.default.strong};
`;
