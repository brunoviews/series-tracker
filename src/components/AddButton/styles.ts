import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity<{
  width?: number;
  height?: number;
  bottom?: number;
  right?: number;
  left?: number;
  shape?: 'circle' | 'square';
}>`
  position: absolute;
  bottom: ${({ bottom }) => (bottom ? `${bottom}px` : '24px')};
  right: ${({ right }) => (right ? `${right}px` : '10px')};
  left: ${({ left }) => (left ? `${left}px` : 'auto')};
  width: ${({ width }) => (width ? `${width}px` : '56px')};
  height: ${({ height }) => (height ? `${height}px` : '56px')};
  border-radius: ${({ width, height, shape }) =>
    shape === 'circle'
      ? width && height
        ? `${Math.min(width, height) / 2}px`
        : '28px'
      : '0px'};
  border-width: 1px;
  border-color: #14b8a6;
   background-color: #14b8a6;
  align-items: center;
  justify-content: center;
`;
