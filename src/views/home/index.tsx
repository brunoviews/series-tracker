import React from 'react';
import { Container, Title } from './styles';
import { useViewModel } from './viewmodel';

export default function HomeView() {
  useViewModel();

  return (
    <Container>
      <Title>Mis series</Title>
    </Container>
  );
}
