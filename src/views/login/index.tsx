import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Title, Link } from './styles';
import { useViewModel } from './viewmodel';

export default function LoginView() {
  const { goToRegister } = useViewModel();
  const { t } = useTranslation();

  return (
    <Container>
      <Title>{t('auth.login.title')}</Title>
      <Link onPress={goToRegister}>{t('auth.login.linkToRegister')}</Link>
    </Container>
  );
}
