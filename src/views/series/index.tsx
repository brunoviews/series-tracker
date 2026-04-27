import { useViewModel } from './viewmodel';
import HomeLayout from '@/components/HomeLayout';
import SeriesList from '@/components/SeriesList';
import React from 'react';

export default function SeriesView() {
  const { userSeries, loading } = useViewModel();

  return (
    <HomeLayout>
      <SeriesList userSeries={userSeries} isLoading={loading} />
    </HomeLayout>
  );
}
