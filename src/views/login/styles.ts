import styled from 'styled-components/native';
import Text from '@components/Text';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.fill.default.main};
  padding: ${({ theme }) => theme.spacing.md}px;
`;

export const Title = styled(Text).attrs({ variant: 'title-1' })`

`;

export const Input = styled.TextInput`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.components.input.fill};
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.stroke.default.weak};
  border-radius: ${({ theme }) => theme.borderRadius.md}px;
  padding: ${({ theme }) => theme.spacing.md}px;
  margin-bottom: ${({ theme }) => theme.spacing.sm}px;
  font-size: ${({ theme }) => theme.typography['body-2-regular'].fontSize}px;
  color: ${({ theme }) => theme.colors.textIcon.default.main};
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  background-color: ${({ theme }) =>
    theme.colors.components.button.primary.default.fill};
  border-radius: ${({ theme }) => theme.borderRadius.md}px;
  padding: ${({ theme }) => theme.spacing.md}px;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing.sm}px;
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
`;

export const ButtonText = styled.Text`
  color: ${({ theme }) =>
    theme.colors.components.button.primary.default.textIcon};
  font-size: ${({ theme }) => theme.typography['label'].fontSize}px;
  font-weight: ${({ theme }) => theme.typography['label'].fontWeight};
`;

export const ErrorText = styled.Text`
  color: ${({ theme }) => theme.colors.textIcon.semantic.error.main};
  font-size: ${({ theme }) => theme.typography['caption'].fontSize}px;
  margin-bottom: ${({ theme }) => theme.spacing.sm}px;
`;

export const Link = styled.Text`
  color: ${({ theme }) => theme.colors.textIcon.primary.main};
  font-size: ${({ theme }) => theme.typography['body-2-regular'].fontSize}px;
  margin-top: ${({ theme }) => theme.spacing.md}px;
`;
