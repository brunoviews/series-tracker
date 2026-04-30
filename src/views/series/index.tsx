import { useViewModel } from './viewmodel';
import SeriesList from '@/components/SeriesList';
import TabLayout from '@/components/TabLayout';
import { theme } from '@/theme';
import { TelevisionIcon } from 'phosphor-react-native';
import React from 'react';
import { useTranslation } from 'react-i18next';
export default function SeriesView() {
  const { userSeries, loading } = useViewModel();
  const { t } = useTranslation();

  return (
    <TabLayout
      kicker={t('library.kicker')}
      title={t('library.series.title')}
      subtitle={t('library.series.subtitle')}
      count={userSeries.length}
      icon={
        <TelevisionIcon
          size={22}
          color={theme.colors.textIcon.primary.main}
          weight="duotone"
        />
      }
    >
      <SeriesList userSeries={userSeries} isLoading={loading} />
    </TabLayout>
  );
}
