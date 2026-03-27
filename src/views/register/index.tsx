import React from 'react';
import { useTranslation } from 'react-i18next';
import { TextInput } from 'react-native-paper';
import { Container, Title, ErrorText, Link, CustomContainer } from './styles';
import { useViewModel } from './viewmodel';
import { Button } from '@/components/Button';
import { GridBackground } from '@/components/GridBackground';

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
    <CustomContainer>
      <GridBackground />
      <Container>
        <Title>{t('auth.register.title')}</Title>

        <TextInput
          label={t('auth.register.emailPlaceholder')}
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
          autoComplete="email"
          style={{ width: '100%' }}
        />

        <TextInput
          label={t('auth.register.passwordPlaceholder')}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          autoComplete="new-password"
          mode="flat"
          style={{ width: '100%' }}
        />

        {error && <ErrorText>{error}</ErrorText>}

        <Button
          onPress={signUp}
          disabled={loading}
          variant="primary"
          isLoading={loading}
          title={t('auth.register.createAccountButton')}
        />

        <Link onPress={goToLogin}>{t('auth.register.linkToLogin')}</Link>
      </Container>
    </CustomContainer>
  );
}
