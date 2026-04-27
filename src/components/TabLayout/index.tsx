import {
  Accent,
  Container,
  CountPill,
  CountText,
  Header,
  HeaderInner,
  HeaderLeft,
  HeaderRight,
  IconBadge,
  Kicker,
  Subtitle,
  Title,
  TitleRow,
} from './styles';
import type { TabLayoutProps } from './types';
import React from 'react';

export default function TabLayout({
  kicker = 'Library',
  title,
  subtitle,
  count,
  icon,
  right,
  children,
}: TabLayoutProps) {
  return (
    <>
      <Header>
        <HeaderInner>
          <HeaderLeft>
            <Kicker>{kicker}</Kicker>
            <TitleRow>
              <Title numberOfLines={1}>{title}</Title>
              {typeof count === 'number' && (
                <CountPill>
                  <CountText>{count}</CountText>
                </CountPill>
              )}
            </TitleRow>
            {subtitle ? <Subtitle numberOfLines={1}>{subtitle}</Subtitle> : null}
          </HeaderLeft>

          <HeaderRight>
            {right ? right : icon ? <IconBadge>{icon}</IconBadge> : null}
          </HeaderRight>
        </HeaderInner>
        <Accent />
      </Header>

      <Container>{children}</Container>
    </>
  );
}
