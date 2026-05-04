import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background.primary};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.typography['display-2'].fontFamily};
  font-size: ${({ theme }) => theme.typography['display-2'].fontSize}px;
  color: ${({ theme }) => theme.colors.text.primary};
`;
