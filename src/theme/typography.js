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

// TODO:
const lineHeights = {};

const fonts = {
  SFProText: {
    regular: {
      fontFamily: 'SFProText-Regular',
    },
    medium: {
      fontFamily: 'SFProText-Medium',
    },
    bold: {
      fontFamily: 'SFProText-Bold',
    },
  },
  FuturaPT: {
    light: {
      fontFamily: 'FuturaPT-Light',
    },
    book: {
      fontFamily: 'FuturaPT-Book',
    },
    medium: {
      fontFamily: 'FuturaPT-Medium',
    },
    demi: {
      fontFamily: 'FuturaPT-Demi',
    },
    bold: {
      fontFamily: 'FuturaPT-Bold',
    },
    heavy: {
      fontFamily: 'FuturaPT-Heavy',
    },
    extrabold: {
      fontFamily: 'FuturaPT-ExtraBold',
    },
  },

  // Deprecated
  heading: 'Futura PT',
  text: 'SF Pro Text',
};

const typography = {
  fontSizes,
  lineHeights,
  fonts,
};

export default typography;
