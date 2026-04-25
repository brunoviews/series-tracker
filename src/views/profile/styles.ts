import { Button } from '@/components/Button';
import Text from '@/components/Text';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const SafeContainer = styled(SafeAreaView).attrs({
  edges: ['top'],
})`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.fill.default.main};
`;

export const ScrollContainer = styled.ScrollView.attrs({
  contentContainerStyle: { paddingBottom: 40 },
})`
  flex: 1;
`;

// ─── Header ───────────────────────────────────────────────────────────────────

export const HeaderSection = styled.View`
  align-items: center;
  padding: ${({ theme }) => theme.spacing.xl}px
    ${({ theme }) => theme.spacing.md}px ${({ theme }) => theme.spacing.lg}px;
  gap: 8px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.stroke.default.weak};
  margin-bottom: 16px;
`;

export const AvatarCircle = styled.View`
  width: 88px;
  height: 88px;
  border-radius: ${({ theme }) => theme.borderRadius.full}px;
  background-color: ${({ theme }) => theme.colors.fill.primary.variant};
  align-items: center;
  justify-content: center;
  border-width: 2px;
  border-color: ${({ theme }) => theme.colors.stroke.primary.weak};
  margin-bottom: 4px;
`;

export const AvatarInitials = styled(Text).attrs({ variant: 'title-1' })`
  color: ${({ theme }) => theme.colors.textIcon.primary.main};
`;

// ─── Sections ─────────────────────────────────────────────────────────────────

export const SectionTitle = styled(Text).attrs({ variant: 'label' })`
  color: ${({ theme }) => theme.colors.textIcon.default.medium};
  margin-bottom: ${({ theme }) => theme.spacing.sm}px;
  padding: 0 ${({ theme }) => theme.spacing.md}px;
  letter-spacing: 0.8px;
  text-transform: uppercase;
`;

// ─── Options list ─────────────────────────────────────────────────────────────

export const OptionsList = styled.View`
  padding: 0 ${({ theme }) => theme.spacing.md}px;
  gap: 12px;
`;

export const OptionRow = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.fill.default.medium};
  border-radius: ${({ theme }) => theme.borderRadius.md}px;
  border-width: 1px;
  border-color: rgba(148, 163, 184, 0.1);
  padding: ${({ theme }) => theme.spacing.md}px;
`;

export const OptionRowContent = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 12px;
`;

export const OptionLabel = styled(Text).attrs({ variant: 'body-2-regular' })`
  color: ${({ theme }) => theme.colors.textIcon.default.main};
  font-weight: 600;
`;

// ─── Logout ───────────────────────────────────────────────────────────────────

export const LogoutButton = styled.TouchableOpacity`
  margin: ${({ theme }) => theme.spacing.md}px;
  background-color: ${({ theme }) => theme.colors.fill.default.medium};
  border-radius: ${({ theme }) => theme.borderRadius.md}px;
  border-width: 1px;
  border-color: rgba(148, 163, 184, 0.1);
  padding: ${({ theme }) => theme.spacing.md}px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 8px;
`;

export const LogoutButtonText = styled(Text).attrs({
  variant: 'body-2-medium',
})`
  color: ${({ theme }) => theme.colors.textIcon.primary.main};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

// ─── Delete account ───────────────────────────────────────────────────────────

export const DangerSection = styled.View`
  margin: ${({ theme }) => theme.spacing.md}px;
  padding: 16px 0;
  gap: 12px;
`;

export const DeleteAccountButton = styled(Button)``;

export const DeleteAccountRowContent = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 12px;
`;

export const DeleteSectionTitle = styled(Text).attrs({ variant: 'label' })`
  color: ${({ theme }) => theme.colors.textIcon.semantic.error.main};
  margin-bottom: ${({ theme }) => theme.spacing.sm}px;
  padding: 0 ${({ theme }) => theme.spacing.md}px;
  letter-spacing: 0.8px;
  text-transform: uppercase;
`;

export const DeleteAccountText = styled(Text).attrs({
  variant: 'body-2-regular',
})`
  color: ${({ theme }) => theme.colors.textIcon.semantic.error.main};
  font-weight: 800;
`;
