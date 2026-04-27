import type React from 'react';

export type TabLayoutProps = {
  kicker?: string;
  title: string;
  subtitle?: string;
  count?: number;
  icon?: React.ReactNode;
  right?: React.ReactNode;
  children: React.ReactNode;
};
