import Text from '@/components/Text';
import { LinearGradient, type LinearGradientProps } from 'expo-linear-gradient';
import React from 'react';
import { ImageBackground } from 'react-native';
import styled from 'styled-components/native';

type FixedGradientProps = Omit<LinearGradientProps, 'colors' | 'start' | 'end'>;

const HeroGradientBase = (props: FixedGradientProps) =>
  React.createElement(LinearGradient, {
    ...props,
    colors: ['rgba(7,11,17,0.1)', 'rgba(7,11,17,0.9)'] as const,
    start: { x: 0.5, y: 0 },
    end: { x: 0.5, y: 1 },
  });

const PosterGradientBase = (props: FixedGradientProps) =>
  React.createElement(LinearGradient, {
    ...props,
    colors: ['rgba(0,0,0,0)', 'rgba(0,0,0,0.75)'] as const,
    start: { x: 0.5, y: 0 },
    end: { x: 0.5, y: 1 },
  });

export const Scroll = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
`;

export const Section = styled.View`
  gap: 12px;
`;

export const SectionHeader = styled.View`
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
`;

export const SectionTitle = styled(Text).attrs({ variant: 'headline' })`
  color: ${({ theme }) => theme.colors.textIcon.default.strong};
`;

export const SectionHint = styled(Text).attrs({ variant: 'label' })`
  color: ${({ theme }) => theme.colors.textIcon.default.weak};
`;

export const HeroCard = styled.Pressable`
  height: 210px;
  border-radius: ${({ theme }) => theme.borderRadius.lg}px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.fill.default.weak};
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.stroke.default.subtle};
`;

export const HeroBackdrop = styled(ImageBackground)`
  flex: 1;
`;

export const HeroGradient = styled(HeroGradientBase)`
  flex: 1;
  justify-content: flex-end;
  padding: 16px;
  gap: 10px;
`;

export const HeroKicker = styled(Text).attrs({ variant: 'overline' })`
  color: ${({ theme }) => theme.colors.textIcon.default.weak};
`;

export const HeroTitle = styled(Text).attrs({ variant: 'title-1' })`
  color: ${({ theme }) => theme.colors.textIcon.default.strong};
`;

export const HeroMetaRow = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const MetaPill = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 6px;
  padding: 6px 10px;
  border-radius: ${({ theme }) => theme.borderRadius.full}px;
  background-color: ${({ theme }) => theme.colors.fill.default.dim};
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.stroke.default.subtle};
`;

export const MetaText = styled(Text).attrs({ variant: 'caption' })`
  color: ${({ theme }) => theme.colors.textIcon.default.main};
  font-weight: 700;
`;

export const PosterCard = styled.Pressable`
  width: 118px;
  gap: 8px;
`;

export const PosterImageWrap = styled(ImageBackground)`
  width: 118px;
  height: 176px;
  border-radius: ${({ theme }) => theme.borderRadius.md}px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.fill.default.weak};
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.stroke.default.subtle};
`;

export const PosterGradient = styled(PosterGradientBase)`
  flex: 1;
  justify-content: flex-end;
  padding: 10px;
`;

export const PosterTitle = styled(Text).attrs({ variant: 'caption' })`
  color: ${({ theme }) => theme.colors.textIcon.default.strong};
  font-weight: 700;
`;

export const PosterSub = styled(Text).attrs({ variant: 'caption' })`
  color: ${({ theme }) => theme.colors.textIcon.default.weak};
`;

export const LoadingWrap = styled.View`
  padding-top: ${({ theme }) => theme.spacing.lg}px;
  align-items: center;
`;

export const ErrorWrap = styled.View`
  margin-top: ${({ theme }) => theme.spacing.lg}px;
  padding: ${({ theme }) => theme.spacing.md}px;
  border-radius: ${({ theme }) => theme.borderRadius.lg}px;
  background-color: ${({ theme }) => theme.colors.fill.default.weak};
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.stroke.default.weak};
  gap: 10px;
`;

export const ErrorTitle = styled(Text).attrs({ variant: 'headline' })`
  color: ${({ theme }) => theme.colors.textIcon.default.strong};
`;

export const ErrorText = styled(Text).attrs({ variant: 'body-2-regular' })`
  color: ${({ theme }) => theme.colors.textIcon.default.medium};
`;

export const RetryRow = styled.View`
  align-items: flex-start;
`;

export const Separator = styled.View`
  height: 1px;
  background-color: ${({ theme }) => theme.colors.stroke.primary.weak};
  padding: 0 ${({ theme }) => theme.spacing.lg}px;
`;
