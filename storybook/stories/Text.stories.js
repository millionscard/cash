import React from 'react';
import { storiesOf } from '@storybook/react-native';
import Box from '../../src/Box';
import Heading from '../../src/Heading';
import Text from '../../src/Text';

storiesOf('Text', module).add('Text', () => (
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
));
