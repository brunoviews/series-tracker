import React from 'react';
import { FlatList } from 'react-native';
import { useTranslation } from 'react-i18next';
import {
  AvatarContainer,
  Container,
  GreenDot,
  HomeHeader,
  StatusFilterContainer,
  StatusPill,
  StatusPillText,
  UserName,
  WelcomeContainer,
  WelcomeText,
} from './styles';
import { useViewModel } from './viewmodel';
import { Avatar } from 'react-native-paper';
import type { SeriesStatus } from './types';
import SeriesCard from '@components/SeriesCard';
import AddButton from '@/components/AddButton';

const STATUSES: SeriesStatus[] = [
  'watching',
  'completed',
  'planned',
  'dropped',
];

const STATUS_I18N_KEYS = {
  watching: 'series.status.watching',
  completed: 'series.status.completed',
  planned: 'series.status.planned',
  dropped: 'series.status.dropped',
} as const;

export default function HomeView() {
  const {
    firstName,
    greetingKey,
    activeStatus,
    setActiveStatus,
    filteredSeries,
    handleAddSeries,
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
            </StatusPill>
          ))}
        </StatusFilterContainer>

        <FlatList
          data={filteredSeries}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <SeriesCard {...item} />}
          style={{ flex: 1 }}
          contentContainerStyle={{ paddingTop: 4, paddingBottom: 100 }}
          showsVerticalScrollIndicator={false}
        />
        <AddButton onPress={handleAddSeries} />
      </Container>
    </>
  );
}
