import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, useColorScheme, View, Text } from 'react-native';

import { ThemeProvider, Box } from './src';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <ThemeProvider>
          <Box>Cash Playground App</Box>
        </ThemeProvider>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
