module.exports = {
  siteMetadata: {
    title: 'Cash',
    shortName: 'Cash',
    description: '💰 Millions Component Library for React Native',
  },
  pathPrefix: '/cash',
  plugins: [
    {
      resolve: '@primer/gatsby-theme-doctocat',
      options: {
        icon: './src/images/favicon.svg',
      },
    },
  ],
};
