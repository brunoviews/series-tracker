import Text from '@/components/Text';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

// ─── Layout ───────────────────────────────────────────────────────────────────

export const SafeContainer = styled(SafeAreaView).attrs({
  edges: ['top', 'bottom'],
})`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.fill.default.main};
`;

export const ScrollContainer = styled.ScrollView.attrs({
  contentContainerStyle: { paddingBottom: 40 },
  keyboardShouldPersistTaps: 'handled',
})`
  flex: 1;
`;

// ─── Header ───────────────────────────────────────────────────────────────────

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.md}px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.stroke.default.weak};
`;

export const BackButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
`;

export const HeaderTitle = styled(Text).attrs({ variant: 'body-1-medium' })`
  color: ${({ theme }) => theme.colors.stroke.primary.main};
  text-transform: uppercase;
    letter-spacing: 0.8px;
`;

export const HeaderSpacer = styled.View`
  width: 40px;
`;

// ─── Avatar ───────────────────────────────────────────────────────────────────

export const AvatarSection = styled.View`
  align-items: center;
  padding: ${({ theme }) => theme.spacing.xl}px
    ${({ theme }) => theme.spacing.md}px ${({ theme }) => theme.spacing.lg}px;
  gap: 12px;
`;

export const AvatarCircle = styled.View`
  width: 96px;
  height: 96px;
  border-radius: ${({ theme }) => theme.borderRadius.full}px;
  background-color: ${({ theme }) => theme.colors.fill.primary.variant};
  align-items: center;
  justify-content: center;
  border-width: 2px;
  border-color: ${({ theme }) => theme.colors.stroke.primary.weak};
`;

export const AvatarInitials = styled(Text).attrs({ variant: 'title-1' })`
  color: ${({ theme }) => theme.colors.textIcon.primary.main};
`;

export const AvatarHint = styled(Text).attrs({ variant: 'caption' })`
  color: ${({ theme }) => theme.colors.textIcon.default.strong};

`;

// ─── Form ─────────────────────────────────────────────────────────────────────

export const FormSection = styled.View`
  padding: 0 ${({ theme }) => theme.spacing.md}px;
  gap: ${({ theme }) => theme.spacing.md}px;
`;

export const FieldGroup = styled.View`
  gap: 6px;
`;

export const FieldLabel = styled(Text).attrs({ variant: 'label' })`
  color: ${({ theme }) => theme.colors.textIcon.default.medium};
  letter-spacing: 0.6px;
  text-transform: uppercase;
  padding-left: 4px;
`;

export const FieldInput = styled.TextInput`
  background-color: ${({ theme }) => theme.colors.fill.default.medium};
  border-radius: ${({ theme }) => theme.borderRadius.md}px;
  border-width: 1px;
  border-color: rgba(148, 163, 184, 0.1);
  padding: ${({ theme }) => theme.spacing.md}px;
  color: ${({ theme }) => theme.colors.textIcon.default.strong};
  font-size: 15px;

`;

export const SectionDivider = styled.View`
  height: 1px;
  background-color: ${({ theme }) => theme.colors.stroke.default.weak};
  margin: ${({ theme }) => theme.spacing.sm}px 0;
`;

export const SaveButtonWrapper = styled.View`
  padding: 0 ${({ theme }) => theme.spacing.md}px;
  margin-top: ${({ theme }) => theme.spacing.lg}px;
`;

export const ErrorText = styled(Text).attrs({ variant: 'caption' })`
  color: ${({ theme }) => theme.colors.textIcon.semantic.error.main};
  padding-left: 4px;
`;
