const presets = ['module:metro-react-native-babel-preset'];
const plugins = [
  [
    'module-resolver',
    {
      alias: {
        '@cash': './src',
        '@playground': './playground',
      },
    },
  ],
];

module.exports = {
  presets,
  plugins,
  env: {
    production: {
      presets,
      plugins: [...plugins, ['transform-remove-console']],
    },
  },
};
