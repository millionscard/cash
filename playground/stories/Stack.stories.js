import React from 'react';
import * as Cash from '@cash';

const BoxExample = props => (
  <Cash.Box bg="black.50" width="50px" height="50px" {...props}></Cash.Box>
);
export default () => (
  <>
    <Cash.Stack direction="column" gap="20px" mb={3}>
      <Cash.Heading>Direction: row</Cash.Heading>
      <Cash.Stack direction="row" gap="20px" mb={3}>
        {Array.from({ length: 3 }, (_, id) => ({ id })).map(({ id }) => (
          <BoxExample key={id} width="25%" />
        ))}
      </Cash.Stack>

      <Cash.Heading>Direction: column</Cash.Heading>
      <Cash.Stack direction="column" gap="20px">
        {Array.from({ length: 3 }, (_, id) => ({ id })).map(({ id }) => (
          <BoxExample key={id} width="100%" />
        ))}
      </Cash.Stack>
    </Cash.Stack>
  </>
);
