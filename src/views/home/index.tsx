import {
  AvatarCircle,
  AvatarInitials,
  Container,
  HomeHeader,
  TabContainer,
  UserName,
  WelcomeContainer,
  WelcomeText,
} from './styles';
import { useViewModel } from './viewmodel';
import MoviesList from '@/components/MoviesList';
import SeriesList from '@/components/SeriesList';
import { useSeries } from '@/context/SeriesContext';
import { theme } from '@/theme';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';

function SeriesRoute() {
  const { userSeries, loading } = useSeries();
  return <SeriesList userSeries={userSeries} isLoading={loading} />;
}

function MoviesRoute() {
  return <MoviesList userMovies={[]} isLoading={false} />;
}

const renderScene = SceneMap({
  series: SeriesRoute,
  movies: MoviesRoute,
});

const routes = [
  { key: 'series', title: 'Series' },
  { key: 'movies', title: 'Movies' },
];

export default function HomeView() {
  const { firstName, greetingKey, userInitials } = useViewModel();
  const { t } = useTranslation();
  const [index, setIndex] = useState(0);

  return (
    <>
      <HomeHeader>
        <WelcomeContainer>
          <WelcomeText>{t(`home.greeting.${greetingKey}`)} 👋</WelcomeText>
          <UserName>{firstName}</UserName>
        </WelcomeContainer>
        <AvatarCircle>
          <AvatarInitials>{userInitials}</AvatarInitials>
        </AvatarCircle>
      </HomeHeader>

      <Container>
        <TabContainer>
          <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            swipeEnabled={false}
            renderTabBar={(props) => (
              <TabBar
                {...props}
                style={{ backgroundColor: theme.colors.fill.default.base }}
                indicatorStyle={{
                  backgroundColor: theme.colors.textIcon.primary.main,
                }}
                activeColor={theme.colors.textIcon.primary.main}
                inactiveColor={theme.colors.textIcon.default.medium}
              />
            )}
          />
        </TabContainer>
      </Container>
    </>
  );
}
