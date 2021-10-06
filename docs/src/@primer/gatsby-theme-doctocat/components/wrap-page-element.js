import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { BaseStyles, theme } from '@primer/components';
import SkipLink from '@primer/gatsby-theme-doctocat/src/components/skip-link';
import deepmerge from 'deepmerge';
import colors from '../../../../../src/theme/colors';

const GlobalStyle = createGlobalStyle`
  a[color="blue.5"] {
    color: ${props => props.theme.colors.purple['500']};
  }
`;

// Use custom theme
const customTheme = deepmerge(theme, { colors: { purple: colors.purple } });

function wrapPageElement({ element }) {
  return (
    <ThemeProvider theme={customTheme}>
      <BaseStyles>
        <GlobalStyle />
        <SkipLink />
        {element}
      </BaseStyles>
    </ThemeProvider>
  );
}

export default wrapPageElement;
