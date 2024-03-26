import React from 'react';
import Svg, {Circle, Path, Line} from 'react-native-svg';

interface IconProps {
  size: number;
  color: string;
}

export const HomeIconFilled: React.FC<IconProps> = ({size, color}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <Path d="M3 9l9-7 9 7v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <Path d="M9 22v-8h6v8" />
  </Svg>
);

export const HomeIconOutline: React.FC<IconProps> = ({size, color}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M3 9l9-7 9 7v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M9 22v-8h6v8"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const DetailsIconFilled: React.FC<IconProps> = ({size, color}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <Circle cx="12" cy="12" r="10" />
    <Line x1="12" y1="8" x2="12" y2="12" />
    <Line x1="12" y1="16" x2="12" y2="16" />
  </Svg>
);

export const DetailsIconOutline: React.FC<IconProps> = ({size, color}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2" />
    <Line x1="12" y1="8" x2="12" y2="12" stroke={color} strokeWidth="2" />
    <Line x1="12" y1="16" x2="12" y2="16" stroke={color} strokeWidth="2" />
  </Svg>
);
