export default [
  {
    title: 'Animations',
    stories: [
      {
        title: 'useAnimation',
        description: null,
        docs: null,
        stories: [
          {
            title: 'Example',
            description: '',
            component: require('./animations/useAnimation.stories').default,
          },
        ],
      },
    ],
  },
  {
    title: 'Forms',
    stories: [
      {
        title: 'Radio',
        description: null,
        docs: null,
        stories: [
          {
            title: 'Example',
            description: '',
            component: require('./forms/Radio.stories').default,
          },
        ],
      },
    ],
  },
  {
    title: 'Typography',
    stories: [
      {
        title: 'Text',
        description: 'Primitive Element',
        docs: '/components/typography/Text',
        stories: [
          {
            title: 'Example',
            description: '',
            component: require('./typography/Text.stories').default,
          },
        ],
      },
      {
        title: 'Heading',
        description: '',
        docs: '/components/typography/Heading',
        stories: [
          {
            title: 'Example',
            description: '',
            component: require('./typography/Heading.stories').default,
          },
        ],
      },
    ],
  },
  {
    title: 'Components',
    stories: [
      {
        title: 'Buttons',
        description: 'Primitive Element',
        docs: '/components/Buttons',
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
            title: 'Button Icon',
            description: '',
            component: require('./Button/ButtonIcon.stories').default,
          },
          {
            title: 'Button Ghost',
            description: '',
            component: require('./Button/ButtonGhost.stories').default,
          },
        ],
      },
      {
        title: 'Box',
        description: 'Primitive Element',
        docs: '/components/Box',
        stories: [
          {
            title: 'Example',
            description: '',
            component: require('./Box.stories').default,
          },
        ],
      },
      {
        title: 'Card',
        description: null,
        docs: '/components/Card',
        stories: [
          {
            title: 'Example',
            description: '',
            component: require('./Card.stories').default,
          },
        ],
      },
      {
        title: 'GradientMask',
        description: null,
        docs: '/components/GradientMask',
        stories: [
          {
            title: 'Example',
            description: '',
            component: require('./GradientMask.stories').default,
          },
        ],
      },
      {
        title: 'Icon',
        description: null,
        docs: '/components/Icon',
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
        docs: '/components/ActivityIndicator',
        stories: [
          {
            title: 'Examples',
            description: '',
            component: require('./ActivityIndicator.stories').default,
          },
        ],
      },
      {
        title: 'Link',
        description: null,
        docs: '/components/Link',
        stories: [
          {
            title: 'Examples',
            description: '',
            component: require('./Link.stories').default,
          },
        ],
      },
      {
        title: 'Stack',
        description: null,
        docs: '/components/Stack',
        stories: [
          {
            title: 'Examples',
            description: '',
            component: require('./Stack.stories').default,
          },
        ],
      },
      {
        title: 'Avatar',
        description: null,
        docs: null,
        stories: [
          {
            title: 'Examples',
            description: '',
            component: require('./Avatar.stories').default,
          },
        ],
      },
      {
        title: 'Numpad',
        description: null,
        docs: '/components/Numpad',
        stories: [
          {
            title: 'Value',
            description: '',
            component: require('./Numpad/NumpadValue.stories').default,
          },
          {
            title: 'Passcode',
            description: '',
            component: require('./Numpad/NumpadPasscode.stories').default,
          },
        ],
      },
      {
        title: 'TextDivider',
        description: null,
        docs: '/components/TextDivider',
        stories: [
          {
            title: 'Examples',
            description: '',
            component: require('./TextDivider.stories').default,
          },
        ],
      },
    ],
  },
];
