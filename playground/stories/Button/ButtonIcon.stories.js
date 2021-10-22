import React from 'react';
import * as Cash from '@cash';

export default () => (
  <Cash.Card bg="black.25">
    <Cash.ButtonIcon sx={{ mb: '3' }} />
    <Cash.ButtonIcon isDisabled sx={{ mb: '3' }} />
    <Cash.ButtonIcon isRounded sx={{ mb: '3' }} />
    <Cash.ButtonIcon size="md" sx={{ mb: '3' }} />
    <Cash.ButtonIcon size="sm" isRounded />
  </Cash.Card>
);
