import { ThemeVariant } from "@/theme/types";

export type ButtonProps = {
  onPress: () => void;
  disabled?: boolean;
  isLoading?: boolean;
  variant: ThemeVariant
  title?: string;
};