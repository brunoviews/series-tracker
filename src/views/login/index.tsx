import {
  AppName,
  Container,
  CustomContainer,
  ErrorText,
  Link,
  SubTitle,
  Title,
  TitleContainer,
} from './styles';
import { useViewModel } from './viewmodel';
import { Button } from '@/components/Button';
import { FancyBackground } from '@/components/FancyBackground';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { TextInput } from 'react-native-paper';

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
    isDisable,
  } = useViewModel();
  const { t } = useTranslation();

  return (
    <CustomContainer>
      <FancyBackground />

      <TitleContainer>
        <AppName>{t('homeView.appName')}</AppName>

        <SubTitle>Track what you watch</SubTitle>
      </TitleContainer>
      <Container>
        <Title>Log in</Title>

        <TextInput
          label={t('auth.login.emailPlaceholder')}
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
          autoComplete="email"
          style={{ width: '100%' }}
        />

        <TextInput
          label={t('auth.login.passwordPlaceholder')}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          autoComplete="password"
          style={{ width: '100%' }}
        />

        {error && <ErrorText>{error}</ErrorText>}

        <Button
          onPress={signIn}
          disabled={isDisable || loading}
          variant="primary"
          isLoading={loading}
          title={t('auth.login.submitButton')}
        />

        <Link onPress={goToRegister}>{t('auth.login.linkToRegister')}</Link>
      </Container>
    </CustomContainer>
  );
}
