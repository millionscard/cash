import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider as SCThemeProvider } from 'styled-components/native';
import { useTheme } from 'styled-components';
import defaultTheme from './theme';

const ThemeProvider = ({ children }) => (
  <SCThemeProvider theme={defaultTheme}>{children}</SCThemeProvider>
);

ThemeProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export { useTheme };
export default ThemeProvider;
