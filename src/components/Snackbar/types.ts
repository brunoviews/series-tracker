export type SnackbarProps = {
  visible: boolean;
  onDismiss: () => void;
  message: string | null;
  action?: {
    label: string;
    onPress: () => void;
  };
  isSuccess?: boolean;
  isError?: boolean;
  duration?: number;
};
