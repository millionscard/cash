import React from 'react';
import * as Cash from '@cash';

const components = [
  {
    title: 'Button',
    description: 'Primitive Element',
    docs: null,
    stories: [
      {
        title: 'Button',
        description: '',
        component: <Cash.Button background="white">Button</Cash.Button>,
      },
      {
        title: 'Button Primary',
        description: '',
        component: (
          <>
            <Cash.ButtonPrimary mb="3">Button Primary</Cash.ButtonPrimary>
            <Cash.ButtonPrimary mb="3" colorScheme="gold">
              Button Primary
            </Cash.ButtonPrimary>
            <Cash.ButtonPrimary colorScheme="green">Button Primary</Cash.ButtonPrimary>
          </>
        ),
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
        component: (
          <Cash.Box bg="gray.100" p={3} _text={{ color: 'gray.300' }}>
            Box
          </Cash.Box>
        ),
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
        component: (
          <>
            <Cash.Box alignItems="center" mb={5}>
              <Cash.Text fontWeight="bold">bold</Cash.Text>
              <Cash.Text color="purple">purple color</Cash.Text>
              <Cash.Text color="danger">danger color</Cash.Text>
            </Cash.Box>

            <Cash.Box alignItems="center">
              <Cash.Heading mb={2}>Sizes</Cash.Heading>

              <Cash.Text fontSize="xs">xs</Cash.Text>
              <Cash.Text fontSize="sm">sm</Cash.Text>
              <Cash.Text fontSize="md">md</Cash.Text>
              <Cash.Text fontSize="lg">lg</Cash.Text>
              <Cash.Text fontSize="xl">xl</Cash.Text>
              <Cash.Text fontSize="2xl">2xl</Cash.Text>
              <Cash.Text fontSize="3xl">3xl</Cash.Text>
              <Cash.Text fontSize="4xl">4xl</Cash.Text>
              <Cash.Text fontSize="5xl">5xl</Cash.Text>
              <Cash.Text fontSize="6xl">6xl</Cash.Text>
            </Cash.Box>
          </>
        ),
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
        component: <Cash.Heading>Some default heading</Cash.Heading>,
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
        component: (
          <Cash.Card height={300} bg="yellow" justifyContent="space-between">
            <Cash.Heading>Heading</Cash.Heading>
            <Cash.Button>Some button</Cash.Button>
          </Cash.Card>
        ),
      },
    ],
  },
];

export default components;
