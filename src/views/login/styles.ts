import Text from '@components/Text';
import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.md}px;
  gap: 16px;
  width: 100%;

`;

export const Title = styled(Text).attrs({ variant: 'title-1' })`
  text-align: center;
  width: 100%;
`;

export const AppName = styled(Text).attrs({ variant: 'title-1' })`
  text-align: center;
  width: 100%;
  color: ${({ theme }) => theme.colors.textIcon.default.strong};
  font-size: 42px;
  line-height: 48px;
`;

export const SubTitle = styled(Text).attrs({ variant: 'title-3' })`
  text-align: center;
  width: 100%;
  color: ${({ theme }) => theme.colors.textIcon.default.weak};
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

export const CustomContainer = styled.ImageBackground`
  padding: ${({ theme }) => theme.spacing.md}px;
  flex: 1;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

//icon container
export const IconContainer = styled.ImageBackground`
  width: 120px;
  height: 120px;
  align-items: center;
  justify-content: center;

`;

//shadow background for the view
export const GridBackground = styled.View`
position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.65);
`;