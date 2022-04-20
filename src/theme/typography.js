const fonts = {
  Inter: {
    100: 'Inter-Thin',
    200: 'Inter-ExtraLight',
    300: 'Inter-Light',
    400: 'Inter-Regular',
    500: 'Inter-Medium',
    600: 'Inter-SemiBold',
    700: 'Inter-Bold',
    800: 'Inter-ExtraBold',
    900: 'Inter-Black',
  },
  FuturaPT: {
    300: 'FuturaPT-Light',
    400: 'FuturaPT-Book',
    500: 'FuturaPT-Medium',
    600: 'FuturaPT-Demi',
    700: 'FuturaPT-Bold',
    800: 'FuturaPT-Heavy',
    900: 'FuturaPT-ExtraBold',
  },
};

fonts.Inter.thin = fonts.Inter[100];
fonts.Inter.extralight = fonts.Inter[200];
fonts.Inter.light = fonts.Inter[300];
fonts.Inter.regular = fonts.Inter[400];
fonts.Inter.medium = fonts.Inter[500];
fonts.Inter.semibold = fonts.Inter[600];
fonts.Inter.bold = fonts.Inter[700];
fonts.Inter.extrabold = fonts.Inter[800];
fonts.Inter.black = fonts.Inter[900];

fonts.FuturaPT.light = fonts.FuturaPT[300];
fonts.FuturaPT.book = fonts.FuturaPT[400];
fonts.FuturaPT.medium = fonts.FuturaPT[500];
fonts.FuturaPT.demi = fonts.FuturaPT[600];
fonts.FuturaPT.bold = fonts.FuturaPT[700];
fonts.FuturaPT.heavy = fonts.FuturaPT[800];
fonts.FuturaPT.extrabold = fonts.FuturaPT[900];

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

const typography = {
  fonts,
  fontSizes,
};

export default typography;
