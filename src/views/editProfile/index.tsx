import {
  AvatarCircle,
  AvatarHint,
  AvatarInitials,
  AvatarSection,
  BackButton,
  FieldGroup,
  FieldInput,
  FieldLabel,
  FormSection,
  Header,
  HeaderSpacer,
  HeaderTitle,
  SafeContainer,
  SaveButtonWrapper,
  ScrollContainer,
} from './styles';
import { useViewModel } from './viewmodel';
import { Button } from '@/components/Button';
import { CustomSnackbar } from '@/components/Snackbar';
import { ArrowLeftIcon } from 'phosphor-react-native';
import React from 'react';
import { useTheme } from 'styled-components/native';

export default function EditProfileView() {
  const {
    t,
    handleBack,
    onSave,
    firstName,
    lastName,
    setFirstName,
    setLastName,
    userInitials,
    error,
    setError,
    success,
    setSuccess,
    isLoading,
    isValid,
  } = useViewModel();
  const theme = useTheme();

  return (
    <SafeContainer>
      {/* ── Header ── */}
      <Header>
        <BackButton onPress={handleBack}>
          <ArrowLeftIcon
            size={22}
            color={theme.colors.stroke.primary.main}
            weight="bold"
          />
        </BackButton>
        <HeaderTitle>{t('editProfile.title')}</HeaderTitle>
        <HeaderSpacer />
      </Header>

      <ScrollContainer>
        {/* ── Avatar ── */}
        <AvatarSection>
          <AvatarCircle>
            <AvatarInitials>{userInitials}</AvatarInitials>
          </AvatarCircle>
          <AvatarHint>{t('editProfile.avatarHint')}</AvatarHint>
        </AvatarSection>

        {/* ── Formulario ── */}
        <FormSection>
          <FieldGroup>
            <FieldLabel>{t('editProfile.fields.firstName')}</FieldLabel>
            <FieldInput
              placeholder={t('editProfile.fields.firstNamePlaceholder')}
              placeholderTextColor={theme.colors.textIcon.default.weak}
              autoCapitalize="words"
              returnKeyType="next"
              onChangeText={setFirstName}
              value={firstName}
            />
          </FieldGroup>

          <FieldGroup>
            <FieldLabel>{t('editProfile.fields.lastName')}</FieldLabel>
            <FieldInput
              placeholder={t('editProfile.fields.lastNamePlaceholder')}
              placeholderTextColor={theme.colors.textIcon.default.weak}
              autoCapitalize="words"
              returnKeyType="next"
              onChangeText={setLastName}
              value={lastName}
            />
          </FieldGroup>

          {/* <FieldGroup>
            <FieldLabel>{t('editProfile.fields.userEmail')}</FieldLabel>
            <FieldInput
              placeholder={t('editProfile.fields.userEmailPlaceholder')}
              placeholderTextColor={theme.colors.textIcon.default.weak}
              autoCapitalize="none"
              returnKeyType="done"
              onChangeText={setEmail}
              keyboardType="email-address"
              value={email}
            
            />
          </FieldGroup> */}

          {/* ErrorText eliminado — el Snackbar gestiona ambos casos */}
        </FormSection>

        <SaveButtonWrapper>
          <Button
            variant="primary"
            title={t('editProfile.save')}
            onPress={onSave}
            isLoading={isLoading}
            disabled={!isValid || isLoading}
          />
        </SaveButtonWrapper>
      </ScrollContainer>
      <CustomSnackbar
        message={error ?? success ?? ''}
        visible={!!error || !!success}
        isError={!!error}
        isSuccess={!!success}
        onDismiss={() => {
          setError(null);
          setSuccess(null);
        }}
      />
    </SafeContainer>
  );
}
