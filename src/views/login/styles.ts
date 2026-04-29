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

export const TitleContainer = styled.View`
  align-items: center;  
  justify-content: center;
  gap: 12px; 
  margin-bottom: 32px;

`;

export const AppName = styled(Text).attrs({ variant: 'title-1' })`
  text-align: center;
  color: ${({ theme }) => theme.colors.stroke.primary.main};
 font-size: 48px;
line-height: 100%;
 
`;

export const SubTitle = styled(Text).attrs({ variant: 'title-3' })`
  text-align: center;
  width: 100%;
  color: ${({ theme }) => theme.colors.textIcon.default.weak};
`;

export const ErrorText = styled(Text).attrs({ variant: 'body-2-regular' })`
  color: ${({ theme }) => theme.colors.textIcon.semantic.error.main};
`;

export const Link = styled(Text).attrs({ variant: 'body-1-regular' })`
  color: ${({ theme }) => theme.colors.textIcon.default.strong};
  text-decoration: underline;
`;

export const CustomContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.fill.default.weak};
  padding: ${({ theme }) => theme.spacing.md}px;
  flex: 1;
  align-items: center;
  justify-content: center;
`;
