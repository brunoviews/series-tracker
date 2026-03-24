import React from 'react';
import { Container, Title } from './styles';
import { useViewModel } from './viewmodel';

export default function ProfileView() {
  useViewModel();

  return (
    <Container>
      <Title>Perfil</Title>
    </Container>
  );
}
