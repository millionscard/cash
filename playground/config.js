import React from 'react';
import { Text, Button, ButtonPrimary, Heading, Box, Card } from '../src';

const components = [
  {
    title: 'Button',
    description: 'Primitive Element',
    docs: null,
    stories: [
      {
        title: 'Button',
        description: '',
        component: <Button background="white">Button</Button>,
      },
      {
        title: 'Button Primary',
        description: '',
        component: (
          <>
            <ButtonPrimary>Button Primary</ButtonPrimary>
            <ButtonPrimary colorScheme="gold">Button Primary</ButtonPrimary>
            <ButtonPrimary colorScheme="green">Button Primary</ButtonPrimary>
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
          <Box bg="gray.100" p={3} _text={{ color: 'gray.300' }}>
            Box
          </Box>
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
        title: 'Text',
        description: '',
        component: (
          <>
            <Box alignItems="center" mb={5}>
              <Text fontWeight="bold">bold</Text>
              <Text color="purple">purple color</Text>
              <Text color="danger">danger color</Text>
            </Box>

            <Box alignItems="center">
              <Heading mb={2}>Sizes</Heading>

              <Text fontSize="xs">xs</Text>
              <Text fontSize="sm">sm</Text>
              <Text fontSize="md">md</Text>
              <Text fontSize="lg">lg</Text>
              <Text fontSize="xl">xl</Text>
              <Text fontSize="2xl">2xl</Text>
              <Text fontSize="3xl">3xl</Text>
              <Text fontSize="4xl">4xl</Text>
              <Text fontSize="5xl">5xl</Text>
              <Text fontSize="6xl">6xl</Text>
            </Box>
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
        title: 'Heading',
        description: '',
        component: <Heading>Some default heading</Heading>,
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
          <Card height={300} bg="yellow" justifyContent="space-between">
            <Heading>Heading</Heading>
            <Button>Some button</Button>
          </Card>
        ),
      },
    ],
  },
];

export default components;
