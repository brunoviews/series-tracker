import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Container,
  Title,
  Input,
  Button,
  ButtonText,
  ErrorText,
  Link,
} from './styles';
import { useViewModel } from './viewmodel';

export default function RegisterView() {
  const {
    email,
    setEmail,
    password,
    setPassword,
    loading,
    error,
    signUp,
    goToLogin,
  } = useViewModel();
  const { t } = useTranslation();

  return (
    <Container>
      <Title>{t('auth.register.title')}</Title>

      <Input
        placeholder={t('auth.register.emailPlaceholder')}
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
        autoComplete="email"
      />

      <Input
        placeholder={t('auth.register.passwordPlaceholder')}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        autoComplete="new-password"
      />

      {error && <ErrorText>{error}</ErrorText>}

      <Button onPress={signUp} disabled={loading}>
        <ButtonText>
          {loading ? '...' : t('auth.register.submitButton')}
        </ButtonText>
      </Button>

      <Link onPress={goToLogin}>{t('auth.register.linkToLogin')}</Link>
    </Container>
  );
}
