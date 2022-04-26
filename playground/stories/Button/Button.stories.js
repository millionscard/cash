import React, { useState, useEffect } from 'react';
import * as Cash from '@cash';

export default () => {
  const [isLoading, setIsLoading] = useState(false);
  const triggerLoadingState = () => {
    setIsLoading(!isLoading);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [isLoading]);

  return (
    <>
      <Cash.Card bg="black.25">
        <Cash.Stack direction="column" gap="16px">
          <Cash.Button isLoading={isLoading} onPress={triggerLoadingState}>
            Button text
          </Cash.Button>
          <Cash.Button hasShadow>Button text</Cash.Button>
          <Cash.Button leftIcon={<Cash.Icon name="LeftArrow" />}>Button text</Cash.Button>
          <Cash.Button rightIcon={<Cash.Icon name="RightArrow" />}>Button text</Cash.Button>
        </Cash.Stack>
      </Cash.Card>

      <Cash.Card bg="black.25" mt={3}>
        <Cash.Stack direction="column" gap="16px">
          <Cash.Heading mb="10px">Sizes</Cash.Heading>
          <Cash.Button size="lg" isFullWidth={false}>
            Button text
          </Cash.Button>
          <Cash.Button size="md" isFullWidth={false}>
            Button text
          </Cash.Button>
          <Cash.Button size="sm" isFullWidth={false}>
            Button text
          </Cash.Button>
        </Cash.Stack>
      </Cash.Card>

      <Cash.Card bg="purple.700" mt={3}>
        <Cash.Stack direction="column" gap="16px">
          <Cash.Button colorScheme="translucent">Translucent</Cash.Button>
          <Cash.Button colorScheme="translucent" isDisabled>
            Translucent disabled
          </Cash.Button>
        </Cash.Stack>
      </Cash.Card>

      <Cash.Card mt={3}>
        <Cash.Stack direction="column" gap="16px">
          <Cash.Button colorScheme="purple">Purple</Cash.Button>
          <Cash.Button colorScheme="purple" isDisabled>
            Purple disabled
          </Cash.Button>
        </Cash.Stack>
      </Cash.Card>
    </>
  );
};
