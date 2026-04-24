import { AppTheme, ThemeVariant } from '@/theme/types';
import styled from 'styled-components/native';

const getVariantStyles = (variant: ThemeVariant, theme: AppTheme) => {
  switch (variant) {
    case 'primary':
      return {
        backgroundColor: theme.colors.components.button.primary.default.fill,
        borderRadius: theme.borderRadius.md,
        padding: theme.spacing.md,
        alignItems: 'center',
        justifyContent: 'center',
      };
    case 'ghost':
      return {
        backgroundColor: 'transparent',
        borderRadius: theme.borderRadius.md,
        padding: theme.spacing.md,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1.5,
        borderColor: theme.colors.stroke.default.main,
      };
    case 'neutral':
      return {
        backgroundColor: theme.colors.fill.default.strong,
        borderRadius: theme.borderRadius.md,
        padding: theme.spacing.md,
        alignItems: 'center',
        justifyContent: 'center',
      };
    case 'danger':
      return {
        backgroundColor: 'transparent',
        borderRadius: theme.borderRadius.md,
        padding: theme.spacing.md,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: theme.colors.textIcon.default.weak,
      };
  }
};

export const Container = styled.TouchableOpacity<{ variant: ThemeVariant }>`
  ${({ variant, theme }) => getVariantStyles(variant, theme)}
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  width: 100%;
  padding: ${({ theme }) => theme.spacing.md}px;
  align-items: center;
  justify-content: center;
`;

export const LoadingSpinner = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.colors.textIcon.default.strong,
  size: 'small',
}))``;

export const IconWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;
export const ButtonText = styled.Text<{ variant: ThemeVariant }>`
  color: ${({ variant, theme }) =>
    variant === 'primary'
      ? theme.colors.textIcon.primary.onPrimary
      : variant === 'danger'
        ? theme.colors.textIcon.semantic.error.main
        : theme.colors.textIcon.default.main};
  font-size: 14px;
  text-transform: uppercase;
  text-align: center;
  font-weight: 800;
`;
