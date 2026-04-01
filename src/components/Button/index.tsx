import { ButtonText, Container, LoadingSpinner } from './styles';
import { ButtonProps } from './types';
import { FC } from 'react';

export const Button: FC<ButtonProps> = ({
  onPress,
  disabled,
  title,
  isLoading,
  variant,
}) => {
  return (
    <Container variant={variant} disabled={disabled} onPress={onPress}>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <ButtonText variant={variant}>{title}</ButtonText>
      )}
    </Container>
  );
};
