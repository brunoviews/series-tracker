import {
  AvatarContainer,
  Container,
  EmptyStateContainer,
  EmptyStateSubtitle,
  EmptyStateText,
  GreenDot,
  HomeHeader,
  PillCount,
  StatusFilterContainer,
  StatusPill,
  StatusPillText,
  UserName,
  WelcomeContainer,
  WelcomeText,
} from './styles';
import { useViewModel } from './viewmodel';
import AddButton from '@/components/AddButton';
import { theme } from '@/theme';
import { SeriesStatus } from '@/types/database.types';
import SeriesCard from '@components/SeriesCard';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList } from 'react-native';
import { ActivityIndicator, Avatar } from 'react-native-paper';

const STATUSES: SeriesStatus[] = [
  SeriesStatus.Watching,
  SeriesStatus.Completed,
  SeriesStatus.Planned,
  SeriesStatus.Dropped,
];

const STATUS_I18N_KEYS = {
  [SeriesStatus.Watching]: 'series.status.watching',
  [SeriesStatus.Completed]: 'series.status.completed',
  [SeriesStatus.Planned]: 'series.status.planned',
  [SeriesStatus.Dropped]: 'series.status.dropped',
} as const;

export default function HomeView() {
  const {
    firstName,
    greetingKey,
    activeStatus,
    setActiveStatus,
    filteredSeries,
    statusCountMap,
    handleAddSeries,
    isLoading,
  } = useViewModel();
  const { t } = useTranslation();

  return (
    <>
      <HomeHeader>
        <WelcomeContainer>
          <WelcomeText>{t(`home.greeting.${greetingKey}`)} 👋</WelcomeText>
          <UserName>{firstName}</UserName>
        </WelcomeContainer>
        <AvatarContainer>
          <Avatar.Image
            size={44}
            source={{ uri: 'https://unavatar.io/github/kikobeats' }}
          />
          <GreenDot />
        </AvatarContainer>
      </HomeHeader>

      <Container>
        <StatusFilterContainer>
          {STATUSES.map((status) => (
            <StatusPill
              key={status}
              active={status === activeStatus}
              onPress={() => setActiveStatus(status)}
            >
              <StatusPillText active={status === activeStatus}>
                {t(STATUS_I18N_KEYS[status])}
              </StatusPillText>
              <PillCount active={status === activeStatus}>
                {statusCountMap[status]}
              </PillCount>
            </StatusPill>
          ))}
        </StatusFilterContainer>

        <FlatList
          data={filteredSeries}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <SeriesCard {...item} id={item.tmdb_series_id} type="series" />
          )}
          style={{ flex: 1 }}
          contentContainerStyle={{ paddingTop: 4, paddingBottom: 100 }}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            isLoading ? (
              <ActivityIndicator color={theme.colors.textIcon.default.medium} />
            ) : (
              <EmptyStateContainer>
                <EmptyStateText>{t('home.empty.title')}</EmptyStateText>
                <EmptyStateSubtitle>
                  {t('home.empty.subtitle')}
                </EmptyStateSubtitle>
              </EmptyStateContainer>
            )
          }
        />
        <AddButton
          onPress={handleAddSeries}
          shape="circle"
          buttonType="search"
        />
      </Container>
    </>
  );
}
