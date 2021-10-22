import React from 'react';
import * as Cash from '@cash';

export default () => (
  <Cash.Card bg="black.25">
    <Cash.ButtonGhost sx={{ mb: '3' }}>Button text</Cash.ButtonGhost>
    <Cash.ButtonGhost
      rightIcon={<Cash.Icon name="RightArrow" color="purple.500" />}
      sx={{ mb: '3' }}
    >
      Button text
    </Cash.ButtonGhost>
    <Cash.ButtonGhost leftIcon={<Cash.Icon name="LeftArrow" color="purple.500" />} sx={{ mb: '3' }}>
      Button text
    </Cash.ButtonGhost>
  </Cash.Card>
);
