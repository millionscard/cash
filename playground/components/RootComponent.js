import React, { useState, useEffect } from 'react';
import { Linking } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './RootNavigator';
import { ActivityIndicator, Box } from '@cash';

const PERSISTENCE_KEY = 'NAVIGATION_STATE';

const RootComponent = () => {
  const [isReady, setIsReady] = useState(false);
  const [initialState, setInitialState] = useState();

  useEffect(() => {
    const restoreState = async () => {
      try {
        const initialUrl = await Linking.getInitialURL();
        if (!initialUrl) {
          // Only restore state if there's no deep link
          const savedStateString = await AsyncStorage.getItem(PERSISTENCE_KEY);
          const state = savedStateString ? JSON.parse(savedStateString) : undefined;
          if (state !== undefined) {
            setInitialState(state);
          }
        }
      } finally {
        setIsReady(true);
      }
    };

    if (!isReady) {
      restoreState();
    }
  }, [isReady]);

  if (!isReady) {
    return (
      <Box flex={1} flexDirection="row" alignItems="center" justifyContent="center">
        <ActivityIndicator />
      </Box>
    );
  }

  return (
    <NavigationContainer
      initialState={initialState}
      onStateChange={state => AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state))}
    >
      <RootNavigator />
    </NavigationContainer>
  );
};

export default RootComponent;
