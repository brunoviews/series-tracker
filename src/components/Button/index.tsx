import { ButtonText, Container, IconWrapper, LoadingSpinner } from './styles';
import { ButtonProps } from './types';
import { FC } from 'react';

export const Button: FC<ButtonProps> = ({
  onPress,
  disabled,
  title,
  isLoading,
  variant,
  icon,
}) => {
  return (
    <Container variant={variant} disabled={disabled} onPress={onPress}>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <IconWrapper>
          {icon}
          <ButtonText variant={variant}>{title}</ButtonText>
        </IconWrapper>
      )}
    </Container>
  );
};
