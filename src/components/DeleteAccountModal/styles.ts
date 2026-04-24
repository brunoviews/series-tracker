import Text from '@components/Text';
import styled from 'styled-components/native';

export const Backdrop = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: rgba(7, 11, 17, 0.85);
`;

export const Overlay = styled.Pressable`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const Content = styled.View`
  width: 88%;
  max-width: 360px;
  background-color: ${({ theme }) => theme.colors.fill.default.medium};
  border-radius: ${({ theme }) => theme.borderRadius.md}px;
  overflow: hidden;
`;

export const IconWrapper = styled.View`
  align-items: center;
  justify-content: center;
  padding-top: 32px;
  padding-bottom: 8px;
`;

export const IconCircle = styled.View`
  width: 64px;
  height: 64px;
  border-radius: 32px;
  background-color: ${({ theme }) => theme.colors.fill.semantic.error.weak};
  align-items: center;
  justify-content: center;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.fill.semantic.error.main};
`;

export const TextSection = styled.View`
  align-items: center;
  padding: 0px 24px 24px;
  gap: 8px;
`;

export const Title = styled(Text).attrs({ variant: 'title-3' })`
  color: ${({ theme }) => theme.colors.textIcon.semantic.error.main};
  font-weight: 700;
  text-align: center;
`;

export const Description = styled(Text).attrs({ variant: 'body-1-regular' })`
  color: ${({ theme }) => theme.colors.textIcon.default.medium};
  text-align: center;
  line-height: 22px;
`;

export const Divider = styled.View`
  height: 2px;
  background-color: ${({ theme }) => theme.colors.stroke.default.main};
`;

export const Actions = styled.View`
  flex-direction: row;
`;

export const ActionButton = styled.Pressable<{
  variant: 'cancel' | 'confirm';
  isLoading?: boolean;
}>`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 18px 12px;
  opacity: ${({ isLoading }) => (isLoading ? 0.5 : 1)};
  background-color: ${({ theme, variant }) =>
    variant === 'confirm'
      ? theme.colors.textIcon.semantic.error.main
      : 'transparent'};
`;

export const ActionDivider = styled.View`
  width: 2px;
  background-color: ${({ theme }) => theme.colors.stroke.default.weak};
`;

export const CancelText = styled(Text).attrs({ variant: 'body-2-regular' })`
  color: ${({ theme }) => theme.colors.textIcon.default.strong};
  text-transform: uppercase;
`;

export const ConfirmText = styled(Text).attrs({ variant: 'body-2-regular' })`
  color: ${({ theme }) => theme.colors.fill.semantic.error.main};
  text-transform: uppercase;
`;
