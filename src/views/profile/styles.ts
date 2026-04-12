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
`;

export const AvatarCircle = styled.View`
  width: 88px;
  height: 88px;
  border-radius: ${({ theme }) => theme.borderRadius.full}px;
  background-color: ${({ theme }) => theme.colors.fill.primary.variant};
  align-items: center;
  justify-content: center;
`;

export const AvatarInitials = styled.Text`
  font-family: ${({ theme }) => theme.typography['title-1'].fontFamily};
  font-size: ${({ theme }) => theme.typography['title-1'].fontSize}px;
  font-weight: ${({ theme }) => theme.typography['title-1'].fontWeight};
  color: ${({ theme }) => theme.colors.textIcon.primary.main};
`;

// ─── Sections ─────────────────────────────────────────────────────────────────

export const SectionTitle = styled.Text`
  font-family: ${({ theme }) => theme.typography['headline'].fontFamily};
  font-size: ${({ theme }) => theme.typography['headline'].fontSize}px;
  font-weight: ${({ theme }) => theme.typography['headline'].fontWeight};
  color: ${({ theme }) => theme.colors.textIcon.default.medium};
  margin-top: ${({ theme }) => theme.spacing.lg}px;
  margin-bottom: ${({ theme }) => theme.spacing.sm}px;
  padding: 0 ${({ theme }) => theme.spacing.md}px;
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
  padding: ${({ theme }) => theme.spacing.md}px;
`;

export const OptionRowContent = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 12px;
`;

export const OptionLabel = styled.Text`
  font-family: ${({ theme }) => theme.typography['body-2-regular'].fontFamily};
  font-size: ${({ theme }) => theme.typography['body-2-regular'].fontSize}px;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.textIcon.default.main};
`;

// ─── Logout ───────────────────────────────────────────────────────────────────

export const LogoutButton = styled.TouchableOpacity`
  margin-top: 16px;
  background-color: transparent;
  border-radius: ${({ theme }) => theme.borderRadius.md}px;
  border-width: 1.5px;
  border-color: ${({ theme }) => theme.colors.stroke.default.main};
  padding: ${({ theme }) => theme.spacing.md}px;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

export const LogoutButtonText = styled.Text`
  font-family: ${({ theme }) => theme.typography['body-1-regular'].fontFamily};
  font-size: ${({ theme }) => theme.typography['body-1-regular'].fontSize}px;
  font-weight: ${({ theme }) => theme.typography['body-1-regular'].fontWeight};
  color: ${({ theme }) => theme.colors.textIcon.semantic.error.main};
  text-transform: uppercase;
`;
