import {
  ActionButton,
  ActionDivider,
  Actions,
  Backdrop,
  CancelText,
  ConfirmText,
  Content,
  Description,
  Divider,
  IconCircle,
  IconWrapper,
  Overlay,
  TextSection,
  Title,
} from './styles';
import { DeleteAccountModalProps } from './types';
import { WarningIcon } from 'phosphor-react-native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { ActivityIndicator, Modal } from 'react-native';
import { useTheme } from 'styled-components/native';

export default function DeleteAccountModal({
  isOpen,
  onClose,
  onConfirm,
  isLoading = false,
}: DeleteAccountModalProps) {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <Modal
      visible={isOpen}
      transparent
      animationType="fade"
      statusBarTranslucent
      onRequestClose={onClose}
    >
      <Backdrop>
        <Overlay onPress={isLoading ? undefined : onClose} />

        <Content>
          <IconWrapper>
            <IconCircle>
              <WarningIcon
                size={28}
                color={theme.colors.textIcon.semantic.error.main}
                weight="bold"
              />
            </IconCircle>
          </IconWrapper>

          <TextSection>
            <Title>{t('profile.deleteAccount.title')}</Title>
            <Description>{t('profile.deleteAccount.description')}</Description>
          </TextSection>

          <Divider />

          <Actions>
            <ActionButton
              variant="cancel"
              onPress={onClose}
              disabled={isLoading}
            >
              <CancelText>{t('profile.deleteAccount.cancel')}</CancelText>
            </ActionButton>

            <ActionDivider />

            <ActionButton
              variant="confirm"
              onPress={onConfirm}
              isLoading={isLoading}
              disabled={isLoading}
            >
              {isLoading ? (
                <ActivityIndicator
                  size="small"
                  color={theme.colors.textIcon.default.strong}
                />
              ) : (
                <ConfirmText>{t('profile.deleteAccount.confirm')}</ConfirmText>
              )}
            </ActionButton>
          </Actions>
        </Content>
      </Backdrop>
    </Modal>
  );
}
