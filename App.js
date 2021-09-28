import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './playground/components/RootNavigator';
import { ThemeProvider } from './src';

const App = () => {
  return (
    <NavigationContainer>
      <ThemeProvider>
        <RootNavigator />
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;