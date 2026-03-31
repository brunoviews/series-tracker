import { Container } from './styles';
import { AddButtonProps } from './types';
import { theme } from '@/theme';
import { PlusIcon } from 'phosphor-react-native';

export default function AddButton({
  onPress,
  width,
  height,
  iconSize,
  bottom,
  right,
  left,
}: AddButtonProps) {
  return (
    <Container
      onPress={onPress}
      width={width}
      height={height}
      bottom={bottom}
      right={right}
      left={left}
      activeOpacity={0.5}
    >
      <PlusIcon
        size={iconSize || 14}
        color={theme.colors.textIcon.default.strong}
        weight="bold"
      />
    </Container>
  );
}
