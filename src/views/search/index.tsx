import React from 'react';
import { Container, Title } from './styles';
import { useViewModel } from './viewmodel';

export default function SearchView() {
  useViewModel();

  return (
    <Container>
      <Title>Buscar</Title>
    </Container>
  );
}
