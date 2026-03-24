import React from 'react';
import { Container, Title, Link } from './styles';
import { useViewModel } from './viewmodel';

export default function LoginView() {
  const { goToRegister } = useViewModel();

  return (
    <Container>
      <Title>Login</Title>
      <Link onPress={goToRegister}>¿No tienes cuenta? Regístrate</Link>
    </Container>
  );
}
