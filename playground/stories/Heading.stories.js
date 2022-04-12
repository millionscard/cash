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

    <Cash.Card bg="black.10">
      <Cash.Heading mb={2}>Weights</Cash.Heading>
      {weights.map(weight => (
        <Cash.Heading weight={weight} key={weight}>
          {weight}
        </Cash.Heading>
      ))}
    </Cash.Card>
  </>
);
