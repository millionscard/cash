export default [
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
    docs: null,
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
    docs: null,
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
    docs: null,
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
    docs: null,
    stories: [
      {
        title: 'Example',
        description: '',
        component: require('./Card.stories').default,
      },
    ],
  },
  {
    title: 'Gradient Text',
    description: null,
    docs: null,
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
    docs: null,
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
    docs: null,
    stories: [
      {
        title: 'Examples',
        description: '',
        component: require('./Icon.stories').default,
      },
    ],
  },
  {
    title: 'Activity Indicator',
    description: null,
    docs: null,
    stories: [
      {
        title: 'Examples',
        description: '',
        component: require('./ActivityIndicator.stories').default,
      },
    ],
  },
];
