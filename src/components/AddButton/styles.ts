import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity<{
  width?: number;
  height?: number;
  bottom?: number;
  right?: number;
  left?: number;
}>`
  position: absolute;
  bottom: ${({ bottom }) => (bottom ? `${bottom}px` : '24px')};
  right: ${({ right }) => (right ? `${right}px` : '10px')};
  left: ${({ left }) => (left ? `${left}px` : 'auto')};
  width: ${({ width }) => (width ? `${width}px` : '56px')};
  height: ${({ height }) => (height ? `${height}px` : '56px')};
  border-radius: ${({ width, height }) =>
    width && height ? `${Math.min(width, height) / 2}px` : '28px'};
  background-color: #6c63ff;
  align-items: center;
  justify-content: center;
`;
