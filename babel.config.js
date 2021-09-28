module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@cash': './src',
          '@playground': './playground',
        },
      },
    ],
  ],
};
