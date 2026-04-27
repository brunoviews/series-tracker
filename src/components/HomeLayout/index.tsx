import {
  AvatarCircle,
  AvatarInitials,
  Container,
  HomeHeader,
  UserName,
  WelcomeContainer,
  WelcomeText,
} from './styles';
import { HomeViewProps } from './types';
import { useViewModel } from './viewmodel';
import React from 'react';
import { useTranslation } from 'react-i18next';

export default function MoviesView({ children }: HomeViewProps) {
  const { userFirstName, greetingKey, userInitials } = useViewModel();
  const { t } = useTranslation();

  return (
    <>
      <HomeHeader>
        <WelcomeContainer>
          <WelcomeText>{t(`home.greeting.${greetingKey}`)} 👋</WelcomeText>
          <UserName>{userFirstName}</UserName>
        </WelcomeContainer>
        <AvatarCircle>
          <AvatarInitials>{userInitials}</AvatarInitials>
        </AvatarCircle>
      </HomeHeader>

      <Container>{children}</Container>
    </>
  );
}
