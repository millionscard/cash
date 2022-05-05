import React from 'react';
import * as Cash from '@cash';

export default () => (
  <Cash.Stack direction="column" gap="20px">
    <Cash.Link url="millions://home">Link</Cash.Link>
    <Cash.Link url="millions://home" color="teal.600" shadow="md">
      Link
    </Cash.Link>
    <Cash.Link url="millions://home" size="xs">
      Link
    </Cash.Link>
  </Cash.Stack>
);
