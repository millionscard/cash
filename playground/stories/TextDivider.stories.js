import React from 'react';
import * as Cash from '@cash';

export default () => (
  <>
    <Cash.Stack direction="column" gap="20px" mb={3}>
      <Cash.TextDivider>
        <Cash.Text color="black.200">Text divider</Cash.Text>
      </Cash.TextDivider>

      <Cash.TextDivider>
        <Cash.Text size="sm" color="black.200">
          Text divider
        </Cash.Text>
      </Cash.TextDivider>

      <Cash.TextDivider>
        <Cash.Text size="xs" color="black.500">
          Text divider
        </Cash.Text>
      </Cash.TextDivider>

      <Cash.TextDivider>
        <Cash.Heading size="md" color="black.200">
          Text divider
        </Cash.Heading>
      </Cash.TextDivider>
    </Cash.Stack>
  </>
);
