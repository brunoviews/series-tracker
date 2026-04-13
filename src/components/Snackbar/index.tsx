import { Message } from './styles';
import { SnackbarProps } from './types';
import { SealCheckIcon, XIcon } from 'phosphor-react-native';
import { Snackbar } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from 'styled-components/native';

export function CustomSnackbar({
  visible,
  onDismiss,
  message,
  action,
  isSuccess,
  isError,
  isRemoving,
  duration = 3000,
}: SnackbarProps) {
  const { bottom: safeBottomInset } = useSafeAreaInsets();
  const theme = useTheme();
  return (
    <Snackbar
      style={{
        marginBottom: safeBottomInset,
        marginHorizontal: 40,
        borderRadius: 12,
        backgroundColor: theme.colors.fill.default.strong,
      }}
      elevation={0}
      visible={visible}
      onDismiss={onDismiss}
      duration={duration}
      action={action}
      onIconPress={onDismiss}
      contentStyle={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      icon={() =>
        isSuccess ? (
          <SealCheckIcon
            size={24}
            color={theme.colors.textIcon.primary.main}
            weight="fill"
          />
        ) : (
          <XIcon
            size={24}
            color={theme.colors.textIcon.semantic.error.main}
            weight="bold"
          />
        )
      }
    >
      <Message $isSuccess={isSuccess} $isError={isError} $isRemoving={isRemoving} variant="label">
        {message}
      </Message>
    </Snackbar>
  );
}
