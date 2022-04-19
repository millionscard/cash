import React from 'react';
import * as Cash from '@cash';

const sizes = ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl'];
const weights = [
  'thin',
  'extralight',
  'light',
  'regular',
  'medium',
  'semibold',
  'bold',
  'extrabold',
  'black',
];

export default () => (
  <>
    <Cash.Card bg="black.10" mb={3}>
      <Cash.Heading mb={2}>Sizes</Cash.Heading>
      {sizes.map(size => (
        <Cash.Text size={size} key={size} mb="20px">
          <Cash.Text size={size} weight="bold">
            {size}
          </Cash.Text>{' '}
          lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quisquam quidem...
        </Cash.Text>
      ))}
    </Cash.Card>

    <Cash.Card bg="black.10" mb={3}>
      <Cash.Heading mb={2}>Weights</Cash.Heading>
      {weights.map(weight => (
        <Cash.Text weight={weight} key={weight}>
          {weight}
        </Cash.Text>
      ))}
    </Cash.Card>

    <Cash.Card bg="black.10" mb={3}>
      <Cash.Heading mb={2}>Colored</Cash.Heading>
      <Cash.Text color="purple.500">purple.500</Cash.Text>
      <Cash.Text color="fuschia.500">fuschia.500</Cash.Text>
      <Cash.Text color="green.500">green.500</Cash.Text>
    </Cash.Card>

    <Cash.Card bg="black.10" mb={3}>
      <Cash.Heading mb={2}>Align</Cash.Heading>
      <Cash.Text align="left">left</Cash.Text>
      <Cash.Text align="center">center</Cash.Text>
      <Cash.Text align="right">right</Cash.Text>
    </Cash.Card>
  </>
);
