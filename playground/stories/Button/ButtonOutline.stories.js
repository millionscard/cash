import React from 'react';
import * as Cash from '@cash';

export default () => (
  <>
    <Cash.ButtonOutline mb="3">Button text</Cash.ButtonOutline>
    <Cash.ButtonOutline size="md" isFullWidth isDisabled isLoading>
      Button text
    </Cash.ButtonOutline>
  </>
);
