import React from 'react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import ThemeProvider from '../src/ThemeProvider';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
    defaultViewport: 'iphone12',
  },
  backgrounds: {
    values: [
      {
        name: 'light',
        value: '#F1F1F1',
      },
      {
        name: 'gradient',
        value: 'linear-gradient(#8D34FF 0 25%, #3A86FF 50% 100%) no-repeat',
      },
    ],
  },
};

export const decorators = [
  Story => (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  ),
];
