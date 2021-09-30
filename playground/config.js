import React from 'react';
import * as Cash from '@cash';
import ModalScene from '@playground/scenes/Modal.scene.js';

const components = [
  {
    title: 'Button',
    description: 'Primitive Element',
    docs: null,
    stories: [
      {
        title: 'Button',
        description: '',
        component: (
          <Cash.Button
            background="white"
            onPress={() => {
              alert('👋 from the button');
            }}
          >
            Button text
          </Cash.Button>
        ),
      },
      {
        title: 'Button Primary',
        description: '',
        component: (
          <>
            <Cash.ButtonPrimary mb="3">Button text</Cash.ButtonPrimary>
            <Cash.ButtonPrimary
              mb="3"
              colorScheme="gold"
              onPress={() => {
                alert('👋 from the button');
              }}
            >
              Button text
            </Cash.ButtonPrimary>
            <Cash.ButtonPrimary colorScheme="green">Button text</Cash.ButtonPrimary>
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
          <Cash.Box bg="black.10" p={3} _text={{ color: 'black.300' }}>
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
              <Cash.Text>default</Cash.Text>
              <Cash.Text fontWeight="bold">bold</Cash.Text>
              <Cash.Text color="purple.500">colored</Cash.Text>
              <Cash.Text color="fuschia.500">colored</Cash.Text>
              <Cash.Text color="green.500">colored</Cash.Text>
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
        component: (
          <>
            <Cash.Heading fontSize="3xl">A million ways to win</Cash.Heading>
          </>
        ),
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
          <Cash.Card height={300} bg="yellow.500" justifyContent="space-between">
            <Cash.Heading fontSize="2xl" mr="8">
              Link your bank account to add funds
            </Cash.Heading>
            <Cash.Button>Link bank account</Cash.Button>
          </Cash.Card>
        ),
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
        component: (
          <Cash.GradientText fontSize="2xl" fontWeight="bold">
            Gradient text example
          </Cash.GradientText>
        ),
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
        component: <ModalScene />,
      },
    ],
  },
];

export default components;
