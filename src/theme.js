import { lineHeight } from 'styled-system';

const colors = {
  transparent: 'transparent',
  black: '#0a0b0c',
  white: '#ffffff',
  gray: {
    50: '#f5f5f5',
    100: '#ececec',
    300: '#9e9d9d',
  },
  purple: '#8d34ff',
  green: '#00C64E',
  yellow: '#ffd800',
  blue: {
    300: '#3ac4ff',
  },
  danger: '#fe016e',
};

const fontSizes = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 20,
  '2xl': 24,
  '3xl': 30,
  '4xl': 36,
  '5xl': 48,
  '6xl': 60,
};

const fontWeights = {
  thin: 100,
  ultraLight: 200,
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  heavy: 800,
  black: 900,
};

const radii = {
  none: 0,
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  '2xl': 32,
  '3xl': 45,
  full: 9999,
};

const space = [0, 4, 8, 16, 24, 32, 40, 48, 64, 80, 96, 112, 128];

const theme = {
  colors,
  fontSizes,
  fontWeights,
  radii,
  space,
};

export default theme;
