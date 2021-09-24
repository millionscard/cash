module.exports = {
  stories: [
    '../storybook/stories/**/*.stories.mdx',
    '../storybook/stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    config.resolve.alias = {
      ...config.resolve.alias,
      'react-native': 'react-native-web',
      'react-native-linear-gradient': 'react-native-web-linear-gradient',
      '@storybook/react-native': '@storybook/react',
      'styled-components/native': 'styled-components',
    };

    // Return the altered config
    return config;
  },
};
