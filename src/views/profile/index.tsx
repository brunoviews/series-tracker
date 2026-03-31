import { Container, Title } from './styles';
import { useViewModel } from './viewmodel';
import React from 'react';
import { Button } from 'react-native';

export default function ProfileView() {
  const { t, signOut } = useViewModel();

  return (
    <Container>
      <Title>{t('profile.title')}</Title>
      <Button title="Log out" onPress={signOut} />
    </Container>
  );
}
