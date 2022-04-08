module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          // We should only use these aliases within the playground app
          // Otherwise we would need a build step to resolve the aliases in the lib.
          '@cash': './src',
          '@playground': './playground',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
