import { FC } from 'react';
import { ButtonProps } from './types';
import { ButtonText, Container, LoadingSpinner } from './styles';

export const Button: FC<ButtonProps> = ({
  onPress,
  disabled,
  title,
  isLoading,
  variant,
}) => {
  return (
    <Container variant={variant} disabled={disabled} onPress={onPress}>
      {isLoading ? <LoadingSpinner /> : <ButtonText>{title}</ButtonText>}
    </Container>
  );
};
