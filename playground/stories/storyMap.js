export default [
  {
    title: 'Components',
    stories: [
      {
        title: 'Buttons',
        description: 'Primitive Element',
        docs: '/Buttons',
        stories: [
          {
            title: 'Button',
            description: '',
            component: require('./Button/Button.stories').default,
          },
          {
            title: 'Button Primary',
            description: '',
            component: require('./Button/ButtonPrimary.stories').default,
          },
          {
            title: 'Button Outline',
            description: '',
            component: require('./Button/ButtonOutline.stories').default,
          },
        ],
      },
      {
        title: 'Box',
        description: 'Primitive Element',
        docs: '/Box',
        stories: [
          {
            title: 'Example',
            description: '',
            component: require('./Box.stories').default,
          },
        ],
      },
      {
        title: 'Text',
        description: 'Primitive Element',
        docs: '/Text',
        stories: [
          {
            title: 'Example',
            description: '',
            component: require('./Text.stories').default,
          },
        ],
      },
      {
        title: 'Heading',
        description: '',
        docs: '/Heading',
        stories: [
          {
            title: 'Example',
            description: '',
            component: require('./Heading.stories').default,
          },
        ],
      },
      {
        title: 'Card',
        description: null,
        docs: '/Card',
        stories: [
          {
            title: 'Example',
            description: '',
            component: require('./Card.stories').default,
          },
        ],
      },
      {
        title: 'GradientText',
        description: null,
        docs: '/GradientText',
        stories: [
          {
            title: 'Example',
            description: '',
            component: require('./GradientText.stories').default,
          },
        ],
      },
      {
        title: 'Modal',
        description: null,
        docs: '/Modal',
        stories: [
          {
            title: 'Example',
            description: '',
            component: require('./Modal.stories').default,
          },
        ],
      },
      {
        title: 'Icon',
        description: null,
        docs: '/Icon',
        stories: [
          {
            title: 'Examples',
            description: '',
            component: require('./Icon.stories').default,
          },
        ],
      },
      {
        title: 'ActivityIndicator',
        description: null,
        docs: '/ActivityIndicator',
        stories: [
          {
            title: 'Examples',
            description: '',
            component: require('./ActivityIndicator.stories').default,
          },
        ],
      },
    ],
  },
];