

export type AddButtonProps = {
  onPress?: () => void;
  width?: number;
  height?: number;
  bottom?: number;
  right?: number;
  left?: number;
  iconSize?: number;
  disabled?: boolean;
  buttonType?: 'add' | 'options';
};