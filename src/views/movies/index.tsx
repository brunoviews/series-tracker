import { useViewModel } from './viewmodel';
import MoviesList from '@/components/MoviesList';
import TabLayout from '@/components/TabLayout';
import { theme } from '@/theme';
import { PopcornIcon } from 'phosphor-react-native';
import React from 'react';
import { useTranslation } from 'react-i18next';

export default function MoviesView() {
  const { userMovies, isLoading } = useViewModel();
  const { t } = useTranslation();

  return (
    <TabLayout
      kicker={t('library.kicker')}
      title={t('library.movies.title')}
      subtitle={t('library.movies.subtitle')}
      count={userMovies.length}
      icon={
        <PopcornIcon
          size={22}
          color={theme.colors.textIcon.default.strong}
          weight="duotone"
        />
      }
    >
      <MoviesList userMovies={userMovies} isLoading={isLoading} />
    </TabLayout>
  );
}
