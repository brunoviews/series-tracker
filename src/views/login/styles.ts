import Text from '@components/Text';
import styled from 'styled-components/native';

export const ScreenContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.fill.default.base};
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const AppName = styled(Text).attrs({ variant: 'display-2' })`
  text-align: center;
  color: ${({ theme }) => theme.colors.textIcon.primary.main};
`;

export const SubTitle = styled(Text).attrs({ variant: 'title-3' })`
  text-align: center;
  color: ${({ theme }) => theme.colors.textIcon.default.medium};
`;

export const FormCard = styled.View`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.lg}px;
  background-color: ${({ theme }) => theme.colors.fill.default.weak};
  border-radius: ${({ theme }) => theme.borderRadius.lg}px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.stroke.default.subtle};
  gap: 16px;
  align-items: center;
`;

export const Title = styled(Text).attrs({ variant: 'title-2' })`
  text-align: center;
  width: 100%;
`;

export const ErrorText = styled.Text`
  color: ${({ theme }) => theme.colors.textIcon.semantic.error.main};
  font-size: ${({ theme }) => theme.typography['body-2-regular'].fontSize}px;
`;

export const Link = styled.Text`
  color: ${({ theme }) => theme.colors.textIcon.default.medium};
  font-size: ${({ theme }) => theme.typography['body-1-regular'].fontSize}px;
  text-decoration-line: underline;
`;

export const ContentWrapper = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.md}px;
  gap: ${({ theme }) => theme.spacing.xl}px;
`;
