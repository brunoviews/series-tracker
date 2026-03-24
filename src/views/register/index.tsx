import React from 'react';
import { Container, Title, Link } from './styles';
import { useViewModel } from './viewmodel';

export default function RegisterView() {
  const { goToLogin } = useViewModel();

  return (
    <Container>
      <Title>Registro</Title>
      <Link onPress={goToLogin}>¿Ya tienes cuenta? Inicia sesión</Link>
    </Container>
  );
}
