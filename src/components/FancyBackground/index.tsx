import { theme } from '@/theme';
import React from 'react';
import { StyleSheet, useWindowDimensions } from 'react-native';
import Svg, { Defs, RadialGradient, Rect, Stop } from 'react-native-svg';

export function FancyBackground() {
  const { width, height } = useWindowDimensions();

  return (
    <Svg width={width} height={height} style={StyleSheet.absoluteFill}>
      <Defs>
        <RadialGradient id="bgGradient" cx="50%" cy="40%" r="90%">
          {/* Base oscura */}
          <Stop offset="0%" stopColor={theme.colors.fill.default.base} />
          <Stop offset="60%" stopColor={theme.colors.fill.default.base} />

          {/* Transición */}
          <Stop offset="75%" stopColor={theme.colors.fill.primary.variant} />

          {/* Verde empieza a notarse */}
          <Stop offset="88%" stopColor={theme.colors.fill.primary.container} />

          {/* Glow final */}
          <Stop offset="100%" stopColor={theme.colors.fill.primary.main} />
        </RadialGradient>
      </Defs>

      <Rect x={0} y={0} width={width} height={height} fill="url(#bgGradient)" />
    </Svg>
  );
}
