import React from 'react';
import * as Cash from '@cash';

export default () => (
  <Cash.Stack direction="column" gap="16px">
    <Cash.GradientMask>Text</Cash.GradientMask>
    <Cash.GradientMask>
      <Cash.Heading>Heading</Cash.Heading>
    </Cash.GradientMask>
    <Cash.GradientMask>
      <Cash.Icon name="Backspace" width="32" />
    </Cash.GradientMask>
  </Cash.Stack>
);
