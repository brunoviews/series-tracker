import { useTranslation } from 'react-i18next';
import { Container, Title } from './styles';
import { useViewModel } from './viewmodel';

export default function ExampleView() {
  const { t } = useTranslation();
  const { data, loading } = useViewModel();

  return (
    <Container>
      <Title>{t('example.title')}</Title>
    </Container>
  );
}
