import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Title, Link } from './styles';
import { useViewModel } from './viewmodel';

export default function RegisterView() {
  const { goToLogin } = useViewModel();
  const { t } = useTranslation();

  return (
    <Container>
      <Title>{t('auth.register.title')}</Title>
      <Link onPress={goToLogin}>{t('auth.register.linkToLogin')}</Link>
    </Container>
  );
}
