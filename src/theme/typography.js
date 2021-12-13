import { Platform } from 'react-native';

const ios = Platform.OS === 'ios';

const fontSizes = {
  '2xs': '10px',
  xs: '12px',
  sm: '14px',
  md: '16px',
  lg: '18px',
  xl: '20px',
  '2xl': '22px',
  '3xl': '24px',
  '4xl': '28px',
  '5xl': '36px',
  '6xl': '48px',
  '7xl': '60px',
  '8xl': '80px',
  '9xl': '96px',
};

const fontWeights = {
  hairline: 100,
  thin: 200,
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  heavy: 800,
  black: 900,
};

// TODO:
const lineHeights = {};

const fonts = {
  SFProText: {
    regular: {
      fontFamily: ios ? 'SF Pro Text' : 'SF-Pro-Text-Regular',
      fontWeight: ios ? fontWeights.regular : 'normal',
    },
    medium: {
      fontFamily: ios ? 'SF Pro Text' : 'SF-Pro-Text-Medium',
      fontWeight: ios ? fontWeights.medium : 'normal',
    },
    semibold: {
      fontFamily: ios ? 'SF Pro Text' : 'SF-Pro-Text-Medium',
      fontWeight: ios ? fontWeights.semibold : 'normal',
    },
    bold: {
      fontFamily: ios ? 'SF Pro Text' : 'SF-Pro-Text-Bold',
      fontWeight: ios ? fontWeights.bold : 'normal',
    },
  },
  FuturaPT: {
    regular: {
      fontFamily: ios ? 'Futura PT Medium' : 'Futura-PT-Medium',
      fontWeight: ios ? fontWeights.regular : 'normal',
    },
    medium: {
      fontFamily: ios ? 'Futura PT Medium' : 'Futura-PT-Medium',
      fontWeight: ios ? fontWeights.medium : 'normal',
    },
    semibold: {
      fontFamily: ios ? 'Futura PT Medium' : 'Futura-PT-Demi',
      fontWeight: ios ? fontWeights.semibold : 'normal',
    },
    bold: {
      fontFamily: ios ? 'Futura PT Medium' : 'Futura-PT-Bold',
      fontWeight: ios ? fontWeights.bold : 'normal',
    },
    heavy: {
      fontFamily: ios ? 'Futura PT Medium' : 'Futura-PT-Heavy',
      fontWeight: ios ? fontWeights.heavy : 'normal',
    },
    black: {
      fontFamily: ios ? 'Futura PT Medium' : 'Futura-PT-ExtraBold',
      fontWeight: ios ? fontWeights.black : 'normal',
    },
  },

  // Deprecated
  heading: 'Futura PT',
  text: 'SF Pro Text',
};

const typography = {
  fontSizes,
  fontWeights,
  lineHeights,
  fonts,
};

export default typography;
