import React from 'react';
import * as Cash from '@cash';

export default () => (
  <>
    <Cash.Card bg="black.25">
      <Cash.Button mb="3">Button text</Cash.Button>
      <Cash.Button mb="3" hasShadow>
        Button text
      </Cash.Button>
      <Cash.Button leftIcon={<Cash.Icon name="LeftArrow" />} mb="3">
        Button text
      </Cash.Button>
      <Cash.Button rightIcon={<Cash.Icon name="RightArrow" />} mb="3">
        Button text
      </Cash.Button>
      <Cash.Button mb="3" loadingText="Loading..." isLoading>
        Button text
      </Cash.Button>
      <Cash.Button mb="3" isDisabled>
        Disabled
      </Cash.Button>
      <Cash.Button size="md" mb="3">
        Button text
      </Cash.Button>
      <Cash.Button size="sm">Button text</Cash.Button>
    </Cash.Card>

    <Cash.Card bg="purple.700" mt={3}>
      <Cash.Stack direction="column" gap="16px">
        <Cash.Button colorScheme="translucent">Translucent</Cash.Button>
        <Cash.Button colorScheme="translucent" isDisabled>
          Translucent disabled
        </Cash.Button>
      </Cash.Stack>
    </Cash.Card>
  </>
);
