import Text from '@components/Text';
import styled from 'styled-components/native';


export const Container = styled.View`
  flex: 1;
  justify-content: center;
  background-color: rgba(8, 12, 18, 0.8);
`;

// Capa invisible que cierra el modal al pulsar fuera del Content.
export const Overlay = styled.Pressable`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const Content = styled.View`
  background-color: ${({ theme }) => theme.colors.fill.default.medium};
  width: 90%;
  max-width: 380px;
  padding: 20px;
  border-radius: 16px;
  gap: 16px;
  align-self: center;
`;

// ─── Header ──────────────────────────────────────────────────────────

export const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ModalTitle = styled(Text).attrs({ variant: 'title-3' })`
  color: ${({ theme }) => theme.colors.textIcon.primary.main};
  font-weight: 700;
`;

export const CloseButton = styled.TouchableOpacity`
  padding: 8px;
`;

// ─── Poster ──────────────────────────────────────────────────────────


export const PosterContainer = styled.View`
  width: 100px;
  height: 140px;
  border-radius: 12px;
  overflow: hidden;
  align-self: center;
  background-color: ${({ theme }) => theme.colors.fill.default.strong};
`;

// .attrs() inyecta resizeMode sin necesidad de pasarlo cada vez en el JSX.
export const PosterImage = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: 100%;
  height: 100%;
`;

export const ContentTitle = styled(Text).attrs({ variant: 'title-3' })`
  color: ${({ theme }) => theme.colors.textIcon.default.strong};
  font-weight: 700;
  text-align: center;
`;

// ─── Status badges (2×2 grid) ────────────────────────────────────────
// flex-wrap: wrap + gap crean un grid automático.
// Cada BadgePressable ocupa ~47% → caben exactamente 2 por fila.

export const StatusContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
`;

export const BadgePressable = styled.Pressable`
  width: 47%;
`;

// $isSelected y $color son "transient props" (prefijo $).
// styled-components v6 NO los reenvía al componente nativo,
// así evitas warnings de React Native por props desconocidas.
export const StatusBadge = styled.View<{
  $isSelected?: boolean;
  $color?: string;
}>`
  background-color: ${({ $isSelected, $color, theme }) =>
    $isSelected ? `${$color}18` : theme.colors.fill.default.strong};
  padding: 10px 14px;
  border-radius: 12px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 6px;
  border-width: 1.5px;
  border-color: ${({ $isSelected, $color }) =>
    $isSelected ? $color : 'transparent'};
`;

export const StatusBadgeText = styled(Text).attrs({ variant: 'caption' })<{
  $isSelected?: boolean;
  $color?: string;
}>`
  color: ${({ $isSelected, $color, theme }) =>
    $isSelected ? $color : theme.colors.textIcon.default.medium};
  font-weight: 700;
  text-transform: uppercase;
`;

// ─── Action buttons ──────────────────────────────────────────────────

export const ActionRow = styled.View`
  flex-direction: row;
  gap: 12px;
  margin-top: 4px;
`;

export const CancelAction = styled.Pressable`
  flex: 1;
  padding: 14px;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  border-width: 1.5px;
  border-color: ${({ theme }) => theme.colors.stroke.default.main};
`;

export const ConfirmAction = styled.Pressable<{ $disabled?: boolean }>`
  flex: 1;
  padding: 14px;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  background-color: ${({ $disabled, theme }) =>
    $disabled
      ? theme.colors.components.button.primary.disabled.fill
      : theme.colors.components.button.primary.default.fill};
`;

export const ActionText = styled(Text).attrs({ variant: 'label' })<{
  $variant: 'cancel' | 'confirm';
  $disabled?: boolean;
}>`
  font-weight: 700;
  text-transform: uppercase;
  color: ${({ $variant, $disabled, theme }) => {
    if ($variant === 'confirm') {
      return $disabled
        ? theme.colors.components.button.primary.disabled.textIcon
        : theme.colors.textIcon.primary.onPrimary;
    }
    return theme.colors.textIcon.default.main;
  }};
`;
