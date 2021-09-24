import { ThemeProvider as SCThemeProvider } from 'styled-components/native';
import defaultTheme from './theme';

const ThemeProvider = ({ children }) => (
  <SCThemeProvider theme={defaultTheme}>{children}</SCThemeProvider>
);

export default ThemeProvider;
