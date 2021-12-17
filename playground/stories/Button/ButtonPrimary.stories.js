import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
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
      <Cash.ButtonPrimary mb="3" isLoading={isLoading} onPress={triggerLoadingState} isFullWidth>
        Button text
      </Cash.ButtonPrimary>
      <Cash.ButtonPrimary colorScheme="gold" mb="3" isFullWidth hasShadow>
        Button text
      </Cash.ButtonPrimary>
      <Cash.ButtonPrimary colorScheme="danger" mb="3" isFullWidth>
        Button text
      </Cash.ButtonPrimary>
      <Cash.ButtonPrimary colorScheme="success" mb="3" isFullWidth>
        Button text
      </Cash.ButtonPrimary>
      <Cash.ButtonPrimary mb="3">Button text</Cash.ButtonPrimary>
      <Cash.ButtonPrimary mb="3" size="md">
        Button text
      </Cash.ButtonPrimary>
    </>
  );
};
