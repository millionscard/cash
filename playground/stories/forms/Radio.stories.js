import React from 'react';
import * as Cash from '@cash';

const radioGroupItems = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
];

export default () => {
  return (
    <Cash.Stack direction="column" gap="16px">
      <Cash.Card bg="black.5">
        <Cash.Heading mb="10px">Radio</Cash.Heading>
        <Cash.Stack direction="column" gap="16px">
          <Cash.Radio value="1">Radio</Cash.Radio>
          <Cash.Radio value="3" checked>
            Radio checked
          </Cash.Radio>
          <Cash.Radio value="2" disabled>
            Radio disabled
          </Cash.Radio>
        </Cash.Stack>
      </Cash.Card>

      <Cash.Card bg="black.5" mb={3}>
        <Cash.Heading mb="10px">Radio Group</Cash.Heading>
        <Cash.RadioGroup
          name="radio-group"
          value={radioGroupItems[0].value}
          items={radioGroupItems}
          renderItem={({ label, ...item }) => (
            <Cash.Box py="4px">
              <Cash.Radio {...item}>{label}</Cash.Radio>
            </Cash.Box>
          )}
          onChange={() => {}}
        />
      </Cash.Card>
    </Cash.Stack>
  );
};
