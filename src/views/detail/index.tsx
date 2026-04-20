import {
  BackdropImage,
  BackdropPlaceholder,
  Body,
  CastCard,
  CastCharacter,
  CastName,
  CastPhoto,
  CastPhotoPlaceholder,
  CastPhotoWrapper,
  CastScroll,
  Chip,
  ChipsRow,
  ChipText,
  FABButton,
  GradientWrapper,
  InfoDivider,
  InfoItem,
  InfoItemLabel,
  InfoRow,
  InfoValue,
  MetaRow,
  MetaText,
  OverviewText,
  PosterImage,
  PosterPlaceholder,
  PosterRow,
  RatingPill,
  RatingPillText,
  SectionLabel,
  SeriesTitle,
  StatusBadge,
  StatusBadgeText,
  TitleBlock,
} from './styles';
import type { DetailViewProps } from './types';
import { useViewModel } from './viewmodel';
import AddShowModal from '@/components/AddShowModal';
import { CustomSnackbar } from '@/components/Snackbar';
import { STATUS_COLORS } from '@/theme/statusColors';
import { SeriesStatus } from '@/types/app.types';
import DetailLayout from '@components/DetailLayout';
import type { TmdbMovieDetail, TmdbSeriesDetail } from '@lib/tmdb';
import { LinearGradient } from 'expo-linear-gradient';
import {
  BookmarkIcon,
  CheckCircleIcon,
  ImageSquareIcon,
  PencilSimpleIcon,
  PlusIcon,
  ProhibitIcon,
  StarIcon,
  TelevisionIcon,
  UserIcon,
} from 'phosphor-react-native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { ActivityIndicator, View } from 'react-native';
import { useTheme } from 'styled-components/native';
type StatusI18nKey =
  | 'series.status.watching'
  | 'series.status.completed'
  | 'series.status.planned'
  | 'series.status.dropped';

const STATUS_I18N_KEYS: Record<SeriesStatus, StatusI18nKey> = {
  [SeriesStatus.Watching]: 'series.status.watching',
  [SeriesStatus.Completed]: 'series.status.completed',
  [SeriesStatus.Planned]: 'series.status.planned',
  [SeriesStatus.Dropped]: 'series.status.dropped',
};

const STATUS_ICONS: Record<
  SeriesStatus,
  (color: string) => React.ReactElement
> = {
  [SeriesStatus.Watching]: (color) => (
    <TelevisionIcon size={14} color={color} weight="fill" />
  ),
  [SeriesStatus.Completed]: (color) => (
    <CheckCircleIcon size={14} color={color} weight="fill" />
  ),
  [SeriesStatus.Planned]: (color) => (
    <BookmarkIcon size={14} color={color} weight="fill" />
  ),
  [SeriesStatus.Dropped]: (color) => (
    <ProhibitIcon size={14} color={color} weight="fill" />
  ),
};

export default function DetailView({ route }: DetailViewProps) {
  const { tmdbId, type } = route.params;
  const {
    detail,
    loading,
    userStatus,
    title,
    year,
    posterUrl,
    backdropUrl,
    cast,
    modalVisible,
    isAdding,
    isRemoving,
    openModal,
    closeModal,
    handleAddSeries,
    handleRemoveSeries,
    //error handling
    snackMessage,
    clearSnackMessage,
    isSuccess,
    isRemovingSnack,
  } = useViewModel(tmdbId, type);
  const theme = useTheme();
  const { t } = useTranslation();

  const bgMain = theme.colors.fill.default.main;

  if (loading) {
    return (
      <DetailLayout>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: 120,
          }}
        >
          <ActivityIndicator color={theme.colors.textIcon.primary.main} />
        </View>
      </DetailLayout>
    );
  }

  const seriesDetail = type === 'series' ? (detail as TmdbSeriesDetail) : null;
  const movieDetail = type === 'movie' ? (detail as TmdbMovieDetail) : null;

  return (
    <>
      <DetailLayout>
        {/* ── Hero backdrop ── */}
        <View>
          {backdropUrl ? (
            <BackdropImage source={{ uri: backdropUrl }} resizeMode="cover" />
          ) : (
            <BackdropPlaceholder />
          )}
          <GradientWrapper>
            <LinearGradient
              colors={['transparent', bgMain]}
              style={{ flex: 1 }}
            />
          </GradientWrapper>
        </View>

        {/* ── Poster + título ── */}
        <PosterRow>
          {posterUrl ? (
            <PosterImage
              $status={userStatus}
              source={{ uri: posterUrl }}
              resizeMode="cover"
            />
          ) : (
            <PosterPlaceholder>
              <ImageSquareIcon
                size={28}
                color={theme.colors.textIcon.default.weak}
              />
            </PosterPlaceholder>
          )}

          <TitleBlock>
            <SeriesTitle numberOfLines={2}>{title}</SeriesTitle>
            <MetaRow>
              {year ? <MetaText>{year}</MetaText> : null}
              {detail?.vote_average ? (
                <RatingPill>
                  <StarIcon size={12} color="#FBBF24" weight="fill" />
                  <RatingPillText>
                    {detail.vote_average.toFixed(1)}
                  </RatingPillText>
                </RatingPill>
              ) : null}
            </MetaRow>

            {userStatus && (
              <StatusBadge $status={userStatus}>
                {STATUS_ICONS[userStatus](STATUS_COLORS[userStatus] )}
                <StatusBadgeText $color={STATUS_COLORS[userStatus]}>
                  {t(STATUS_I18N_KEYS[userStatus])}
                </StatusBadgeText>
              </StatusBadge>
            )}
          </TitleBlock>
        </PosterRow>

        <Body>
          {/* ── Géneros ── */}
          {detail?.genres && detail.genres.length > 0 && (
            <ChipsRow>
              {detail.genres.map((g) => (
                <Chip key={g.id}>
                  <ChipText>{g.name}</ChipText>
                </Chip>
              ))}
            </ChipsRow>
          )}

          {/* ── Info específica por tipo ── */}
          {seriesDetail && (
            <InfoRow>
              <InfoItem>
                <InfoValue>{seriesDetail.number_of_seasons}</InfoValue>
                <InfoItemLabel>{t('detail.seasons')}</InfoItemLabel>
              </InfoItem>
              <InfoDivider />
              <InfoItem>
                <InfoValue>{seriesDetail.number_of_episodes}</InfoValue>
                <InfoItemLabel>{t('detail.episodes')}</InfoItemLabel>
              </InfoItem>
              <InfoDivider />
              <InfoItem>
                <InfoValue>
                  {t(
                    ('detail.tmdbStatus.' +
                      seriesDetail.status) as `detail.tmdbStatus.${string}`,
                    { defaultValue: seriesDetail.status },
                  )}
                </InfoValue>
                <InfoItemLabel>{t('detail.status')}</InfoItemLabel>
              </InfoItem>
            </InfoRow>
          )}

          {movieDetail && movieDetail.runtime > 0 && (
            <InfoRow>
              <InfoItem>
                <InfoValue>{movieDetail.runtime} min</InfoValue>
                <InfoItemLabel>{t('detail.duration')}</InfoItemLabel>
              </InfoItem>
              <InfoDivider />
              <InfoItem>
                <InfoValue>
                  {t(
                    ('detail.tmdbStatus.' +
                      movieDetail.status) as `detail.tmdbStatus.${string}`,
                    { defaultValue: movieDetail.status },
                  )}
                </InfoValue>
                <InfoItemLabel>{t('detail.status')}</InfoItemLabel>
              </InfoItem>
            </InfoRow>
          )}

          {/* ── Sinopsis ── */}
          {detail?.overview ? (
            <View>
              <SectionLabel>{t('detail.synopsis').toUpperCase()}</SectionLabel>
              <OverviewText>{detail.overview}</OverviewText>
            </View>
          ) : null}

          {/* ── Reparto ── */}
          {cast.length > 0 && (
            <View>
              <SectionLabel>{t('detail.cast').toUpperCase()}</SectionLabel>
              <CastScroll>
                {cast.map((member) => (
                  <CastCard key={member.id}>
                    {member.profile_path ? (
                      <CastPhotoWrapper>
                        <CastPhoto
                          source={{
                            uri: `https://image.tmdb.org/t/p/w185${member.profile_path}`,
                          }}
                          resizeMode="cover"
                        />
                      </CastPhotoWrapper>
                    ) : (
                      <CastPhotoPlaceholder>
                        <UserIcon
                          size={24}
                          color={theme.colors.textIcon.default.weak}
                        />
                      </CastPhotoPlaceholder>
                    )}
                    <CastName numberOfLines={2}>{member.name}</CastName>
                    <CastCharacter numberOfLines={2}>
                      {member.character}
                    </CastCharacter>
                  </CastCard>
                ))}
              </CastScroll>
            </View>
          )}
        </Body>

        {/* ── FAB ── */}
        {detail && (
          <FABButton onPress={openModal} $editing={!!userStatus}>
            {userStatus ? (
              <PencilSimpleIcon
                size={18}
                color={theme.colors.textIcon.primary.main}
                weight="bold"
              />
            ) : (
              <PlusIcon size={18} color="#0a0a0a" weight="bold" />
            )}
          </FABButton>
        )}

        {/* ── Modal ── */}

        <AddShowModal
          isOpen={modalVisible}
          item={detail}
          onConfirm={handleAddSeries}
          onRemove={userStatus ? handleRemoveSeries : undefined}
          onCancel={closeModal}
          isLoading={isAdding}
          isRemoving={isRemoving}
          initialStatus={userStatus}
        />
      </DetailLayout>
      <CustomSnackbar
        visible={!!snackMessage}
        onDismiss={clearSnackMessage}
        message={snackMessage ?? ''}
        isSuccess={isSuccess}
        isError={!isSuccess}
        isRemoving={isRemovingSnack}
        duration={2500}
      />
    </>
  );
}
