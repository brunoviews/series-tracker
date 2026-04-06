import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.fill.default.main};
`;

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: { paddingBottom: 40 },
})`
  flex: 1;
`;

export const BackContainer = styled.TouchableOpacity`
  position: absolute;
  left: 16px;
  z-index: 10;
  width: 36px;
  height: 36px;
  border-radius: 18px;
  background-color: rgba(0, 0, 0, 0.55);
  align-items: center;
  justify-content: center;
`;
