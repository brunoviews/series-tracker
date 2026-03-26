import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Title } from './styles';
import { useViewModel } from './viewmodel';
import { Button } from 'react-native';

export default function ProfileView() {
  const { t, signOut } = useViewModel();
  

  return (
    <Container>
      <Title>{t('profile.title')}</Title>
      <Button title='Log out' onPress={signOut} />
    </Container>
  );
}
