import { AppTheme, ThemeVariant } from '@/theme/types';
import styled from 'styled-components/native';

const getVariantStyles = (variant: ThemeVariant, theme: AppTheme ) => {
  switch (variant) {
    case 'primary':
      return {
        backgroundColor: theme.colors.components.button.primary.default.fillPressed,
        borderRadius: theme.borderRadius.md,
        padding: theme.spacing.md,
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 1,
      };
    }
    
  }


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
  
}))`

`;

export const ButtonText = styled.Text`
  color: ${({ theme }) =>
    theme.colors.textIcon.default.strong};
    font-size: 14px;
    text-transform: uppercase;
    width: 100%;
    text-align: center;
    font-weight: 800;
`;