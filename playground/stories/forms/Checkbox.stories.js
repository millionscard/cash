import React from 'react';
import * as Cash from '@cash';

export default () => {
  return (
    <Cash.Stack direction="column" gap="16px">
      <Cash.Card bg="black.5">
        <Cash.Heading mb="10px">Checkbox</Cash.Heading>
        <Cash.Stack direction="column" gap="16px">
          <Cash.Checkbox value="1">Checkbox</Cash.Checkbox>
          <Cash.Checkbox value="3" checked>
            Checkbox checked
          </Cash.Checkbox>
          <Cash.Checkbox value="2" disabled>
            Checkbox disabled
          </Cash.Checkbox>
        </Cash.Stack>
      </Cash.Card>
    </Cash.Stack>
  );
};
