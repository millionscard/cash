import React from 'react';
import * as Cash from '@cash';

const sizes = ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl'];
const weights = ['light', 'book', 'medium', 'demi', 'bold', 'heavy', 'extrabold'];

export default () => (
  <>
    <Cash.Card mb={3} bg="black.10">
      <Cash.Heading mb={2}>Sizes</Cash.Heading>
      {sizes.map(size => (
        <Cash.Heading numberOfLines={1} size={size} key={size}>
          A million ways to win
        </Cash.Heading>
      ))}
    </Cash.Card>

    <Cash.Card bg="black.10" mb={3}>
      <Cash.Heading mb={2}>Weights</Cash.Heading>
      {weights.map(weight => (
        <Cash.Heading weight={weight} key={weight}>
          {weight}
        </Cash.Heading>
      ))}
    </Cash.Card>

    <Cash.Card bg="black.10" mb={3}>
      <Cash.Heading mb={2}>Colored</Cash.Heading>
      <Cash.Heading color="purple.500">purple.500</Cash.Heading>
      <Cash.Heading color="fuschia.500">fuschia.500</Cash.Heading>
      <Cash.Heading color="green.500">green.500</Cash.Heading>
    </Cash.Card>

    <Cash.Card bg="black.10" mb={3}>
      <Cash.Heading mb={2}>Align</Cash.Heading>
      <Cash.Heading align="left">left</Cash.Heading>
      <Cash.Heading align="center">center</Cash.Heading>
      <Cash.Heading align="right">right</Cash.Heading>
    </Cash.Card>

    <Cash.Card bg="black.10" mb={3}>
      <Cash.Heading mb={2}>Shadow</Cash.Heading>
      <Cash.Heading bg="white" shadow="text.md">
        text.md
      </Cash.Heading>
      <Cash.Heading color="purple.500" shadow="0px 2px 2px rgba(141, 52, 255, 0.5)">
        custom
      </Cash.Heading>
    </Cash.Card>
  </>
);
