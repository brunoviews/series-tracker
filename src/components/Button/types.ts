import { ThemeVariant } from '@/theme/types';
import { ReactNode } from 'react';

export type ButtonProps = {
  onPress: () => void;
  disabled?: boolean;
  isLoading?: boolean;
  variant: ThemeVariant;
  title?: string;
  icon?: ReactNode;
};
