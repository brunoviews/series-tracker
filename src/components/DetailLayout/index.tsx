import { BackContainer, Container, Content } from './styles';
import type { DetailLayoutProps } from './types';
import { useNavigation } from '@react-navigation/native';
import { ArrowLeftIcon } from 'phosphor-react-native';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function DetailLayout({ children }: DetailLayoutProps) {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  return (
    <Container>
      <Content>{children}</Content>
      <BackContainer
        style={{ top: insets.top + 8 }}
        onPress={() => navigation.goBack()}
      >
        <ArrowLeftIcon size={20} color="#F1F5F9" weight="bold" />
      </BackContainer>
    </Container>
  );
}
