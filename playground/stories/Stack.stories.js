import React from 'react';
import * as Cash from '@cash';
import BoxExample from './Box.stories';

export default () => (
  <>
    <Cash.Stack direction="row" gap="20px" mb={3}>
      {Array.from({ length: 3 }, (_, id) => ({ id })).map(({ id }) => (
        <BoxExample key={id} />
      ))}
    </Cash.Stack>
    <Cash.Stack direction="column" gap="20px">
      {Array.from({ length: 3 }, (_, id) => ({ id })).map(({ id }) => (
        <BoxExample key={id} />
      ))}
    </Cash.Stack>
  </>
);
