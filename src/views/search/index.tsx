import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Title } from './styles';
import { useViewModel } from './viewmodel';

export default function SearchView() {
  useViewModel();
  const { t } = useTranslation();

  return (
    <Container>
      <Title>{t('search.title')}</Title>
    </Container>
  );
}
