import React from 'react';
import * as Cash from '@cash';

export default () => {
  const { gradients } = Cash.useTheme();

  return (
    <Cash.Stack direction="column" gap="16px">
      <Cash.GradientMask>Text ✨</Cash.GradientMask>
      <Cash.GradientMask {...gradients.green}>
        <Cash.Heading size="xl" weight="bold">
          $100
        </Cash.Heading>
      </Cash.GradientMask>
      <Cash.GradientMask {...gradients.fire}>
        <Cash.Icon name="Backspace" width="32" />
      </Cash.GradientMask>
    </Cash.Stack>
  );
};
