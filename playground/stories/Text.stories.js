import React from 'react';
import * as Cash from '@cash';

export default () => (
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
);
