import { Container } from './styles';
import { AddButtonProps } from './types';
import { theme } from '@/theme';
import {
  DotsThreeOutlineVerticalIcon,
  MagnifyingGlassIcon,
  PlusIcon,
} from 'phosphor-react-native';

export default function AddButton({
  onPress,
  width,
  height,
  iconSize,
  bottom,
  right,
  left,
  disabled,
  buttonType = 'add',
  shape = 'circle',
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
      disabled={disabled}
      shape={shape}
    >
      {buttonType === 'add' ? (
        <PlusIcon
          size={iconSize || 24}
          color={theme.colors.textIcon.default.strong}
          weight="bold"
        />
      ) : buttonType === 'options' ? (
        <DotsThreeOutlineVerticalIcon
          size={iconSize || 24}
          color={theme.colors.textIcon.default.strong}
          weight="bold"
        />
      ) : buttonType === 'search' ? (
        <MagnifyingGlassIcon
          size={iconSize || 24}
          color={theme.colors.textIcon.default.strong}
          weight="bold"
        />
      ) : null}
    </Container>
  );
}
