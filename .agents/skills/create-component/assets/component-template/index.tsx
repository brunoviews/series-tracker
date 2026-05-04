import { useTranslation } from 'react-i18next';
import { useTheme } from 'styled-components/native';
import { Container, Title } from './styles';
import type { ExampleProps } from './types';
import { useViewModel } from './viewmodel';

export const Example = (props: ExampleProps) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const { handlePress } = useViewModel(props);

  return (
    <Container>
      <Title>{t('example.title')}</Title>
    </Container>
  );
};
