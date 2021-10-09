import React from 'react';
import { Alert } from 'react-native';
import * as Cash from '@cash';

export default () => (
  <>
    <Cash.ButtonPrimary mb="3" isLoading>
      Button text
    </Cash.ButtonPrimary>
    <Cash.ButtonPrimary colorScheme="gold" mb="3" loadingText="Loading Activity..." isLoading>
      Button text
    </Cash.ButtonPrimary>
    <Cash.ButtonPrimary
      colorScheme="green"
      mb="3"
      onPress={() => {
        Alert.alert('Button pressed');
      }}
    >
      Button text
    </Cash.ButtonPrimary>
    <Cash.ButtonPrimary
      size="md"
      onPress={() => {
        Alert.alert('Button pressed');
      }}
      isFullWidth
      isDisabled
    >
      Button text
    </Cash.ButtonPrimary>
  </>
);
