import { makeRegisterSchema, type RegisterFormValues } from './schema';
import {
  AppName,
  ContentWrapper,
  ErrorText,
  FormCard,
  Link,
  ScreenContainer,
  Title,
} from './styles';
import { useViewModel } from './viewmodel';
import { Button } from '@/components/Button';
import { GridBackground } from '@/components/GridBackground';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useMemo } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { ScrollView } from 'react-native';
import { TextInput } from 'react-native-paper';

export default function RegisterView() {
  const { loading, signUp, goToLogin, submitError } = useViewModel();
  const { t } = useTranslation();
  const schema = useMemo(() => makeRegisterSchema(t), [t]);

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(schema),
    mode: 'onChange',
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });
  return (
    <ScreenContainer>
      <GridBackground />
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        style={{ width: '100%' }}
      >
        <ContentWrapper>
          <AppName>Binged</AppName>
          
          <FormCard>
            <Title>{t('auth.register.title')}</Title>

            <Controller
              control={control}
              name="firstName"
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  label={t('auth.register.firstNamePlaceholder')}
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  autoCapitalize="words"
                  autoComplete="given-name"
                  style={{ width: '100%' }}
                  error={!!errors.firstName}
                />
              )}
            />
            {errors.firstName?.message && (
              <ErrorText>{errors.firstName.message}</ErrorText>
            )}
            <Controller
              control={control}
              name="lastName"
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  label={t('auth.register.lastNamePlaceholder')}
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  autoCapitalize="words"
                  autoComplete="family-name"
                  style={{ width: '100%' }}
                  error={!!errors.lastName}
                />
              )}
            />
            {errors.lastName?.message && (
              <ErrorText>{errors.lastName.message}</ErrorText>
            )}

            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  label={t('auth.register.emailPlaceholder')}
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  autoCapitalize="none"
                  keyboardType="email-address"
                  autoComplete="email"
                  style={{ width: '100%' }}
                  error={!!errors.email}
                />
              )}
            />
            {errors.email?.message && (
              <ErrorText>{errors.email.message}</ErrorText>
            )}
            <Controller
              control={control}
              name="password"
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  label={t('auth.register.passwordPlaceholder')}
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  secureTextEntry
                  autoComplete="new-password"
                  mode="flat"
                  style={{ width: '100%' }}
                  error={!!errors.password}
                />
              )}
            />
            {errors.password?.message && (
              <ErrorText>{errors.password.message}</ErrorText>
            )}
            <Controller
              control={control}
              name="confirmPassword"
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  label={t('auth.register.confirmPasswordPlaceholder')}
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  secureTextEntry
                  autoComplete="new-password"
                  mode="flat"
                  style={{ width: '100%' }}
                  error={!!errors.confirmPassword}
                />
              )}
            />
            {errors.confirmPassword?.message && (
              <ErrorText>{errors.confirmPassword.message}</ErrorText>
            )}

            {submitError && <ErrorText>{submitError}</ErrorText>}

            <Button
              onPress={handleSubmit(signUp)}
              disabled={!isValid || loading}
              variant="primary"
              isLoading={loading}
              title={t('auth.register.createAccountButton')}
            />

            <Link onPress={goToLogin}>{t('auth.register.linkToLogin')}</Link>
          </FormCard>
        </ContentWrapper>
      </ScrollView>
    </ScreenContainer>
  );
}
