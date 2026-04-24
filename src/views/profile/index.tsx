import {
  AvatarCircle,
  AvatarInitials,
  DangerSection,
  DeleteAccountButton,
  DeleteSectionTitle,
  HeaderSection,
  LogoutButton,
  LogoutButtonText,
  OptionLabel,
  OptionRow,
  OptionRowContent,
  OptionsList,
  SafeContainer,
  ScrollContainer,
  SectionTitle,
} from './styles';
import { useViewModel } from './viewmodel';
import DeleteAccountModal from '@/components/DeleteAccountModal';
import { CustomSnackbar } from '@/components/Snackbar';
import AppText from '@components/Text';
import {
  BellIcon,
  CaretRightIcon,
  PencilSimpleIcon,
  ShieldIcon,
  SignOutIcon,
  TrashIcon,
} from 'phosphor-react-native';
import React from 'react';
import { useTheme } from 'styled-components/native';

export default function ProfileView() {
  const {
    t,
    signOut,
    userName,
    userInitials,
    userEmail,
    isOpen,
    onDeleteAccount,
    onConfirmDeleteAccount,
    isDeleting,
    onCancelDeleteAccount,
    error,
    setError,
    onEditProfile,
  } = useViewModel();
  const theme = useTheme();
  const iconColor = theme.colors.textIcon.default.medium;
  const iconSize = 22;

  return (
    <SafeContainer>
      <ScrollContainer>
        {/* ── Header ── */}
        <HeaderSection>
          <AvatarCircle>
            <AvatarInitials>{userInitials}</AvatarInitials>
          </AvatarCircle>
          <AppText
            variant="title-2"
            color={theme.colors.textIcon.default.strong}
          >
            {userName}
          </AppText>
          <AppText
            variant="body-2-regular"
            color={theme.colors.textIcon.default.weak}
          >
            {userEmail}
          </AppText>
        </HeaderSection>

        <SectionTitle>{t('profile.preferences.title')}</SectionTitle>
        <OptionsList>
          <OptionRow onPress={onEditProfile}>
            <OptionRowContent>
              <PencilSimpleIcon size={iconSize} color={iconColor} />
              <OptionLabel>{t('profile.preferences.editProfile')}</OptionLabel>
            </OptionRowContent>
            <CaretRightIcon size={iconSize} color={iconColor} />
          </OptionRow>

          <OptionRow onPress={() => {}}>
            <OptionRowContent>
              <BellIcon size={iconSize} color={iconColor} />
              <OptionLabel>
                {t('profile.preferences.notifications')}
              </OptionLabel>
            </OptionRowContent>
            <CaretRightIcon size={iconSize} color={iconColor} />
          </OptionRow>

          <OptionRow onPress={() => {}}>
            <OptionRowContent>
              <ShieldIcon size={iconSize} color={iconColor} />
              <OptionLabel>
                {t('profile.preferences.privacySecurity')}
              </OptionLabel>
            </OptionRowContent>
            <CaretRightIcon size={iconSize} color={iconColor} />
          </OptionRow>
        </OptionsList>

        {/* ── Logout ── */}
        <LogoutButton onPress={signOut}>
          <SignOutIcon
            size={iconSize}
            color={theme.colors.textIcon.primary.main}
          />
          <LogoutButtonText>{t('profile.logout')}</LogoutButtonText>
        </LogoutButton>

        {/* ── Danger zone ── */}

        <DangerSection>
          <DeleteSectionTitle>
            {t('profile.deleteAccount.sectionTitle')}
          </DeleteSectionTitle>
          <DeleteAccountButton
            onPress={onDeleteAccount}
            title={t('profile.deleteAccount.title')}
            variant="danger"
            icon={
              <TrashIcon
                size={iconSize}
                color={theme.colors.textIcon.semantic.error.main}
              />
            }
          ></DeleteAccountButton>
        </DangerSection>
        <DeleteAccountModal
          isOpen={isOpen}
          onClose={onCancelDeleteAccount}
          onConfirm={onConfirmDeleteAccount}
          isLoading={isDeleting}
        />
        <CustomSnackbar
          message={error ?? ''}
          visible={!!error}
          isError={!!error}
          onDismiss={() => setError(null)}
        />
      </ScrollContainer>
    </SafeContainer>
  );
}
