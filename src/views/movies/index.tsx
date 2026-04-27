import { useViewModel } from './viewmodel';
import HomeLayout from '@/components/HomeLayout';
import MoviesList from '@/components/MoviesList';
import React from 'react';

export default function MoviesView() {
  const { userMovies, isLoading } = useViewModel();

  return (
    <HomeLayout>
      <MoviesList userMovies={userMovies} isLoading={isLoading} />
    </HomeLayout>
  );
}
