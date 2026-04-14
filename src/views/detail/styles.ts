import { STATUS_COLORS } from '@/theme/statusColors';
import { SeriesStatus } from '@/types/database.types';
import Text from '@components/Text';
import styled from 'styled-components/native';

// ─── Hero ─────────────────────────────────────────────────────────────────────

export const BackdropImage = styled.Image`
  width: 100%;
  height: 240px;
`;

export const BackdropPlaceholder = styled.View`
  width: 100%;
  height: 240px;
  background-color: ${({ theme }) => theme.colors.fill.default.strong};
`;

export const GradientWrapper = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 160px;
`;

// ─── Poster + título ──────────────────────────────────────────────────────────

export const PosterRow = styled.View`
  flex-direction: row;
  padding: 0 ${({ theme }) => theme.spacing.md}px;
  margin-top: -60px;
  gap: 12px;
`;

export const PosterImage = styled.Image<{ $status: SeriesStatus }>`
  width: 120px;
  height: 170px;
  border-radius: 10px;
  border-width: 1px;
  border-color: ${({ $status }) => STATUS_COLORS[$status]};
`;

export const PosterPlaceholder = styled.View`
  width: 120px;
  height: 170px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.fill.default.strong};
  align-items: center;
  justify-content: center;
`;

export const TitleBlock = styled.View`
  flex: 1;
  padding-top: 72px;
  gap: 4px;
`;

export const SeriesTitle = styled(Text).attrs({ variant: 'title-2' })`
  color: ${({ theme }) => theme.colors.textIcon.default.strong};
`;

export const MetaText = styled(Text).attrs({ variant: 'caption' })`
  color: ${({ theme }) => theme.colors.textIcon.default.medium};
`;

export const MetaRow = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
  margin-top: 2px;
`;

export const RatingPill = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 3px;
  background-color: rgba(251, 191, 36, 0.12);
  padding: 3px 8px;
  border-radius: 99px;
`;

export const RatingPillText = styled(Text).attrs({ variant: 'caption' })`
  color: #fbbf24;
  font-weight: 700;
`;

// ─── Status badge ─────────────────────────────────────────────────────────────

export const StatusBadge = styled.View<{ $status: SeriesStatus }>`
  flex-direction: row;
  align-items: center;
  gap: 4px;
  align-self: flex-start;
  padding: 6px 12px;
  border-radius: 99px;
  background-color: ${({ $status }) => `${STATUS_COLORS[$status]}1A`};
  border-width: 1px;
  border-color: ${({ $status }) => `${STATUS_COLORS[$status]}66`};
  margin-top: 6px;
`;

export const StatusBadgeText = styled(Text).attrs({ variant: 'caption' })<{
  $color: string;
}>`
  color: ${({ $color }) => $color};
  font-weight: 700;
`;

// ─── Cuerpo ───────────────────────────────────────────────────────────────────

export const Body = styled.View`
  padding: ${({ theme }) => theme.spacing.md}px;
  gap: ${({ theme }) => theme.spacing.lg}px;
  margin-top: ${({ theme }) => theme.spacing.sm}px;
`;

export const SectionLabel = styled(Text).attrs({ variant: 'body-1-medium' })`
  color: ${({ theme }) => theme.colors.textIcon.default.strong};
  margin-bottom: 10px;
  font-weight: 700;
  letter-spacing: 0.8px;
`;

export const OverviewText = styled(Text).attrs({ variant: 'body-1-regular' })`
  color: ${({ theme }) => theme.colors.textIcon.default.medium};
  line-height: 22px;
`;

// ─── Info chips ───────────────────────────────────────────────────────────────

export const ChipsRow = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: true,
  contentContainerStyle: { gap: 6, paddingBottom: 16 },
})``;

export const Chip = styled.View`
  padding: 6px 12px;
  border-radius: 99px;
  background-color: ${({ theme }) => theme.colors.fill.default.strong};
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.stroke.default.weak};
`;

export const ChipText = styled(Text).attrs({ variant: 'label' })`
  color: ${({ theme }) => theme.colors.textIcon.default.main};
`;

export const InfoRow = styled.View`
  flex-direction: row;
  gap: 0px;
  background-color: ${({ theme }) => theme.colors.fill.default.strong};
  border-radius: 12px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.stroke.default.weak};
  padding: 12px 16px;
`;

export const InfoDivider = styled.View`
  width: 1px;
  background-color: ${({ theme }) => theme.colors.stroke.default.weak};
  margin: 4px 16px;
`;

export const InfoItem = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  gap: 2px;
`;

export const InfoValue = styled(Text).attrs({ variant: 'body-1-regular' })`
  color: ${({ theme }) => theme.colors.textIcon.default.strong};
`;

export const InfoItemLabel = styled(Text).attrs({ variant: 'caption' })`
  color: ${({ theme }) => theme.colors.textIcon.default.medium};
`;

// ─── Reparto ──────────────────────────────────────────────────────────────────

export const CastScroll = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { gap: 12 },
})``;

export const CastCard = styled.View`
  align-items: center;
  width: 72px;
  gap: 4px;
`;

export const CastPhotoWrapper = styled.View`
  width: 56px;
  height: 56px;
  border-radius: 28px;
  overflow: hidden;
`;

export const CastPhoto = styled.Image`
  width: 56px;
  height: 56px;
`;

export const CastPhotoPlaceholder = styled.View`
  width: 56px;
  height: 56px;
  border-radius: 28px;
  background-color: ${({ theme }) => theme.colors.fill.default.strong};
  align-items: center;
  justify-content: center;
`;

export const CastName = styled(Text).attrs({ variant: 'label' })`
  color: ${({ theme }) => theme.colors.textIcon.default.main};
  text-align: center;
`;

export const CastCharacter = styled(Text).attrs({ variant: 'label' })`
  color: ${({ theme }) => theme.colors.textIcon.default.medium};
  text-align: center;
`;

// ─── FAB ──────────────────────────────────────────────────────────────────────

export const FABButton = styled.TouchableOpacity<{ $editing?: boolean }>`
  position: absolute;
  top: 55px;
  right: 14px;
  background-color: ${({ theme, $editing }) =>
    $editing
      ? theme.colors.fill.default.strong
      : theme.colors.textIcon.primary.main};
  border-radius: 99px;
  padding: 16px;
  border-width: 1px;
  border-color: ${({ theme, $editing }) =>
    $editing ? theme.colors.stroke.primary.weak : 'transparent'};
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const FABLabel = styled(Text).attrs({ variant: 'body-2-medium' })`
  color: #0a0a0a;
  font-weight: bold;
`;
