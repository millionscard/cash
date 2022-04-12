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
      <Cash.ButtonPrimary mb="3" isLoading={isLoading} onPress={triggerLoadingState}>
        Button text
      </Cash.ButtonPrimary>
      <Cash.ButtonPrimary colorScheme="gold" mb="3" hasShadow>
        Button text
      </Cash.ButtonPrimary>
      <Cash.ButtonPrimary colorScheme="danger" mb="3">
        Button text
      </Cash.ButtonPrimary>
      <Cash.ButtonPrimary colorScheme="success" mb="3">
        Button text
      </Cash.ButtonPrimary>

      <Cash.Card bg="black.25">
        <Cash.Heading mb="10px">Sizes</Cash.Heading>
        <Cash.ButtonPrimary mb="3" size="lg" isFullWidth={false}>
          Button text
        </Cash.ButtonPrimary>
        <Cash.ButtonPrimary mb="3" size="md" isFullWidth={false}>
          Button text
        </Cash.ButtonPrimary>
        <Cash.ButtonPrimary mb="3" size="sm" isFullWidth={false}>
          Button text
        </Cash.ButtonPrimary>
      </Cash.Card>
    </>
  );
};
