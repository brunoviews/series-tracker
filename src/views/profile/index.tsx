import {
  AvatarCircle,
  AvatarInitials,
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
import AppText from '@components/Text';
import {
  BellIcon,
  CaretRightIcon,
  GlobeIcon,
  PencilSimpleIcon,
  ShieldIcon,
  SignOutIcon,
} from 'phosphor-react-native';
import React from 'react';
import { useTheme } from 'styled-components/native';

export default function ProfileView() {
  const { t, signOut, userName, userInitials, userEmail } = useViewModel();
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
            variant="caption"
            color={theme.colors.textIcon.default.medium}
            style={{ fontSize: 14, lineHeight: 20 }}
          >
            {userEmail}
          </AppText>
        </HeaderSection>

        {/* ── Preferences ── */}
        <SectionTitle>{t('profile.preferences.title')}</SectionTitle>
        <OptionsList>
          <OptionRow onPress={() => {}}>
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
              <GlobeIcon size={iconSize} color={iconColor} />
              <OptionLabel>{t('profile.preferences.language')}</OptionLabel>
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
          {/* ── Logout ── */}
          <LogoutButton onPress={signOut}>
            <LogoutButtonText>{t('profile.logout')}</LogoutButtonText>
            <SignOutIcon
              size={iconSize}
              color={theme.colors.textIcon.semantic.error.main}
            />
          </LogoutButton>
        </OptionsList>
      </ScrollContainer>
    </SafeContainer>
  );
}
