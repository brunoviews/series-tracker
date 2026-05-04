import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.fill.default.medium};
  border-radius: 12px;
  padding: 12px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.typography['title-2'].fontFamily};
  font-size: ${({ theme }) => theme.typography['title-2'].fontSize}px;
  color: ${({ theme }) => theme.colors.text.primary};
`;
