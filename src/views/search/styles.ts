import Text from '@/components/Text';
import { LinearGradient, type LinearGradientProps } from 'expo-linear-gradient';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { useTheme } from 'styled-components/native';

type AccentGradientProps = Omit<
  LinearGradientProps,
  'colors' | 'start' | 'end'
>;

const AccentGradientBase = (props: AccentGradientProps) => {
  const theme = useTheme();

  return React.createElement(LinearGradient, {
    ...props,
    colors: [
      theme.colors.fill.default.base,
      theme.colors.fill.primary.variant,
      theme.colors.fill.default.base,
    ] as const,
    start: { x: 0, y: 0.5 },
    end: { x: 1, y: 0.5 },
  });
};

export const Container = styled(SafeAreaView).attrs({
  edges: ['top'],
})`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.fill.default.base};
`;

export const Header = styled.View`
  background-color: ${({ theme }) => theme.colors.fill.default.base};
  padding: ${({ theme }) => theme.spacing.md}px;
  padding-bottom: ${({ theme }) => theme.spacing.sm}px;
  gap: ${({ theme }) => theme.spacing.md}px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.stroke.default.weak};
`;

export const HeaderTop = styled.View`
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.md}px;
`;

export const HeaderCopy = styled.View`
  flex: 1;
  gap: 4px;
`;

export const Kicker = styled(Text).attrs({ variant: 'overline' })`
  color: ${({ theme }) => theme.colors.textIcon.default.weak};
`;

export const Title = styled(Text).attrs({ variant: 'title-1' })`
  color: ${({ theme }) => theme.colors.textIcon.default.strong};
`;

export const Subtitle = styled(Text).attrs({ variant: 'body-2-regular' })`
  color: ${({ theme }) => theme.colors.textIcon.default.medium};
`;

export const HeaderIconBadge = styled.View`
  width: 44px;
  height: 44px;
  border-radius: ${({ theme }) => theme.borderRadius.full}px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.fill.primary.variant};
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.stroke.primary.weak};
`;

export const HeaderAccent = styled(AccentGradientBase)`
  height: 2px;
  opacity: 0.45;
`;

export const SearchPanel = styled.View`
  gap: ${({ theme }) => theme.spacing.sm}px;
`;

export const SearchInputRow = styled.View<{ $hasError: boolean }>`
  min-height: 52px;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 0 ${({ theme }) => theme.spacing.sm}px;
  border-width: 1px;
  border-color: ${({ theme, $hasError }) =>
    $hasError
      ? theme.colors.textIcon.semantic.error.main
      : theme.colors.components.input.strokeFocused};
  border-radius: ${({ theme }) => theme.borderRadius.md}px;
  background-color: ${({ theme }) => theme.colors.components.input.fill};
  gap: ${({ theme }) => theme.spacing.sm}px;
`;

export const SearchInput = styled.TextInput`
  flex: 1;
  min-height: 50px;
  padding: 0;
  color: ${({ theme }) => theme.colors.textIcon.default.strong};
  font-size: 14px;
`;

export const ClearButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.72,
})`
  width: 44px;
  height: 44px;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.borderRadius.full}px;
`;

export const FilterButtonsContainer = styled.View`
  min-height: 52px;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 4px;
  border-radius: ${({ theme }) => theme.borderRadius.full}px;
  background-color: ${({ theme }) => theme.colors.fill.default.weak};
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.stroke.default.subtle};
  gap: 4px;
`;

export const FilterTypeButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.84,
})<{
  $active: boolean;
}>`
  flex: 1;
  min-height: 44px;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.borderRadius.full}px;
  border-width: 1px;
  border-color: ${({ theme, $active }) =>
    $active ? theme.colors.stroke.primary.weak : theme.colors.transparent};
  background-color: ${({ theme, $active }) =>
    $active ? theme.colors.fill.primary.variant : theme.colors.transparent};
`;

export const FilterButtonContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 6px;
`;

export const StatusPillText = styled(Text).attrs({ variant: 'label' })<{
  $active: boolean;
}>`
  color: ${({ theme, $active }) =>
    $active
      ? theme.colors.textIcon.primary.main
      : theme.colors.textIcon.default.medium};
  text-transform: uppercase;
`;

export const ErrorText = styled(Text).attrs({
  variant: 'caption',
  accessibilityRole: 'alert',
})`
  color: ${({ theme }) => theme.colors.textIcon.semantic.error.main};
  padding-left: 4px;
`;

export const ResultsMetaRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.md}px
    ${({ theme }) => theme.spacing.md}px 0;
`;

export const ResultsCountPill = styled.View`
  padding: 6px 10px;
  border-radius: ${({ theme }) => theme.borderRadius.full}px;
  background-color: ${({ theme }) => theme.colors.fill.default.weak};
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.stroke.default.subtle};
`;

export const ResultsCountText = styled(Text).attrs({ variant: 'label' })`
  color: ${({ theme }) => theme.colors.textIcon.default.medium};
`;

export const EmptyStateContainer = styled.View`
  min-height: 360px;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.xl}px
    ${({ theme }) => theme.spacing.lg}px;
  gap: ${({ theme }) => theme.spacing.sm}px;
`;

export const EmptyStateIcon = styled.View`
  width: 72px;
  height: 72px;
  border-radius: ${({ theme }) => theme.borderRadius.full}px;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing.xs}px;
  background-color: ${({ theme }) => theme.colors.fill.default.weak};
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.stroke.primary.weak};
`;

export const EmptyStateTitle = styled(Text).attrs({
  variant: 'headline',
})`
  color: ${({ theme }) => theme.colors.textIcon.default.strong};
  text-align: center;
`;

export const EmptyStateSubtitle = styled(Text).attrs({
  variant: 'body-2-regular',
})`
  color: ${({ theme }) => theme.colors.textIcon.default.medium};
  text-align: center;
`;

export const SkeletonResultCard = styled.View`
  width: 48%;
  gap: ${({ theme }) => theme.spacing.sm}px;
`;

export const SkeletonPoster = styled.View`
  width: 100%;
  aspect-ratio: 0.68;
  border-radius: ${({ theme }) => theme.borderRadius.md}px;
  background-color: ${({ theme }) => theme.colors.fill.default.weak};
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.stroke.default.subtle};
`;

export const SkeletonLine = styled.View<{ $width: string }>`
  width: ${({ $width }) => $width};
  height: 12px;
  border-radius: ${({ theme }) => theme.borderRadius.full}px;
  background-color: ${({ theme }) => theme.colors.fill.default.medium};
`;
