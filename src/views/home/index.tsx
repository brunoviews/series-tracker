import {
  ErrorText,
  ErrorTitle,
  ErrorWrap,
  HeroBackdrop,
  HeroCard,
  HeroGradient,
  HeroKicker,
  HeroMetaRow,
  HeroTitle,
  LoadingWrap,
  MetaPill,
  MetaText,
  PosterCard,
  PosterGradient,
  PosterImageWrap,
  PosterSub,
  PosterTitle,
  RetryRow,
  Scroll,
  Section,
  SectionHeader,
  SectionHint,
  SectionTitle,
  Separator,
} from './styles';
import { useViewModel } from './viewmodel';
import { Button } from '@/components/Button';
import HomeLayout from '@/components/HomeLayout';
import { getBackdropUrl, getPosterUrl } from '@/lib/tmdb';
import { ScreenType } from '@/navigation/types';
import { useAppNavigation } from '@/navigation/useAppNavigation';
import DefaultImg from '@assets/img/default-fallback-image.png';
import { StarIcon, TrendUpIcon } from 'phosphor-react-native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { useTheme } from 'styled-components/native';

export default function HomeView() {
  const { t } = useTranslation();
  const theme = useTheme();
  const navigation = useAppNavigation();
  const { hero, trendingMovies, trendingSeries, isLoading, error, reload } =
    useViewModel();

  return (
    <HomeLayout>
      <Scroll contentContainerStyle={{ paddingBottom: 80, gap: 24 }}>
        {error ? (
          <ErrorWrap>
            <ErrorTitle>{t('homeTab.error.title')}</ErrorTitle>
            <ErrorText>{t('homeTab.error.subtitle')}</ErrorText>
            <ErrorText>{error}</ErrorText>
            <RetryRow>
              <Button
                variant="ghost"
                title={t('homeTab.error.retry')}
                onPress={reload}
              />
            </RetryRow>
          </ErrorWrap>
        ) : null}

        {hero ? (
          <HeroCard
            onPress={() =>
              navigation.navigate(ScreenType.DETAIL, {
                tmdbId: hero.id,
                type: hero.type,
              })
            }
          >
            <HeroBackdrop
              source={
                hero.item.backdrop_path
                  ? { uri: getBackdropUrl(hero.item.backdrop_path) ?? '' }
                  : hero.item.poster_path
                    ? { uri: getPosterUrl(hero.item.poster_path) ?? '' }
                    : DefaultImg
              }
              resizeMode="cover"
            >
              <HeroGradient>
                <HeroKicker>{t('homeTab.hero.kicker')}</HeroKicker>
                <HeroTitle numberOfLines={2}>
                  {'title' in hero.item ? hero.item.title : hero.item.name}
                </HeroTitle>
                <HeroMetaRow>
                  <MetaPill>
                    <TrendUpIcon
                      size={14}
                      color={theme.colors.textIcon.primary.main}
                      weight="bold"
                    />
                    <MetaText>{t('homeTab.hero.trending')}</MetaText>
                  </MetaPill>
                  <MetaPill>
                    <StarIcon size={14} color="#FBBF24" weight="fill" />
                    <MetaText>
                      {Number.isFinite(hero.item.vote_average)
                        ? hero.item.vote_average.toFixed(1)
                        : '—'}
                    </MetaText>
                  </MetaPill>
                </HeroMetaRow>
              </HeroGradient>
            </HeroBackdrop>
          </HeroCard>
        ) : null}

        {isLoading ? (
          <LoadingWrap>
            <ActivityIndicator color={theme.colors.textIcon.default.medium} />
          </LoadingWrap>
        ) : null}

        <Section>
          <SectionHeader>
            <SectionTitle>{t('homeTab.sections.movies')}</SectionTitle>
            <SectionHint>{t('homeTab.sections.week')}</SectionHint>
          </SectionHeader>

          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={trendingMovies.slice(0, 12)}
            keyExtractor={(item) => String(item.id)}
            contentContainerStyle={{ gap: 12, paddingRight: 8 }}
            renderItem={({ item }) => (
              <PosterCard
                onPress={() =>
                  navigation.navigate(ScreenType.DETAIL, {
                    tmdbId: item.id,
                    type: 'movie',
                  })
                }
              >
                <PosterImageWrap
                  source={
                    item.poster_path
                      ? { uri: getPosterUrl(item.poster_path) ?? '' }
                      : DefaultImg
                  }
                  resizeMode="cover"
                >
                  <PosterGradient>
                    <PosterTitle numberOfLines={2}>{item.title}</PosterTitle>
                  </PosterGradient>
                </PosterImageWrap>
                <PosterSub numberOfLines={1}>
                  {item.release_date
                    ? new Date(item.release_date).getFullYear()
                    : '—'}
                </PosterSub>
              </PosterCard>
            )}
          />
        </Section>
        <Separator />
        <Section>
          
          <SectionHeader>
            <SectionTitle>{t('homeTab.sections.series')}</SectionTitle>
            <SectionHint>{t('homeTab.sections.week')}</SectionHint>
          </SectionHeader>

          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={trendingSeries.slice(0, 12)}
            keyExtractor={(item) => String(item.id)}
            contentContainerStyle={{ gap: 12, paddingRight: 8 }}
            renderItem={({ item }) => (
              <PosterCard
                onPress={() =>
                  navigation.navigate(ScreenType.DETAIL, {
                    tmdbId: item.id,
                    type: 'series',
                  })
                }
              >
                <PosterImageWrap
                  source={
                    item.poster_path
                      ? { uri: getPosterUrl(item.poster_path) ?? '' }
                      : DefaultImg
                  }
                  resizeMode="cover"
                >
                  <PosterGradient>
                    <PosterTitle numberOfLines={2}>{item.name}</PosterTitle>
                  </PosterGradient>
                </PosterImageWrap>
                <PosterSub numberOfLines={1}>
                  {item.first_air_date
                    ? new Date(item.first_air_date).getFullYear()
                    : '—'}
                </PosterSub>
              </PosterCard>
            )}
          />
        </Section>
      </Scroll>
    </HomeLayout>
  );
}
