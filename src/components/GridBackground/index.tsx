import React from 'react';
import { StyleSheet, useWindowDimensions } from 'react-native';
import Svg, {
  Defs,
  Line,
  Mask,
  Pattern,
  RadialGradient,
  Rect,
  Stop,
} from 'react-native-svg';

export function GridBackground() {
  const { width, height } = useWindowDimensions();
  const cx = width / 2;
  const rx = width * 0.6;
  const ry = height * 0.5;

  return (
    <Svg width={width} height={height} style={StyleSheet.absoluteFill}>
      <Defs>
        <Pattern id="grid" width={14} height={24} patternUnits="userSpaceOnUse">
          <Line
            x1={0}
            y1={0}
            x2={0}
            y2={24}
            stroke="rgba(45, 100, 120, 0.15)"
            strokeWidth={1}
          />
          <Line
            x1={0}
            y1={0}
            x2={14}
            y2={0}
            stroke="rgba(45, 100, 120, 0.15)"
            strokeWidth={1}
          />
        </Pattern>

        <RadialGradient
          id="fadeGrad"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform={`translate(${cx}, 0) scale(${rx}, ${ry})`}
        >
          <Stop offset="0%" stopColor="white" stopOpacity={1} />
          <Stop offset="70%" stopColor="white" stopOpacity={1} />
          <Stop offset="100%" stopColor="white" stopOpacity={0} />
        </RadialGradient>

        <Mask id="gridMask">
          <Rect
            x={0}
            y={0}
            width={width}
            height={height}
            fill="url(#fadeGrad)"
          />
        </Mask>
      </Defs>

      <Rect
        x={0}
        y={0}
        width={width}
        height={height}
        fill="url(#grid)"
        mask="url(#gridMask)"
      />
    </Svg>
  );
}
