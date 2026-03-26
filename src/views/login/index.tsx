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

export default function LoginView() {
  const {
    email,
    setEmail,
    password,
    setPassword,
    loading,
    error,
    signIn,
    goToRegister,
  } = useViewModel();
  const { t } = useTranslation();

  return (
    <Container>
      <Title>{t('auth.login.title')}</Title>

      <Input
        placeholder={t('auth.login.emailPlaceholder')}
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
        autoComplete="email"
      />

      <Input
        placeholder={t('auth.login.passwordPlaceholder')}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        autoComplete="password"
      />

      {error && <ErrorText>{error}</ErrorText>}

      <Button onPress={signIn} disabled={loading}>
        <ButtonText>
          {loading ? '...' : t('auth.login.submitButton')}
        </ButtonText>
      </Button>

      <Link onPress={goToRegister}>{t('auth.login.linkToRegister')}</Link>
    </Container>
  );
}
