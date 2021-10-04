import React from 'react';
import { SafeAreaView } from 'react-native';
import styled from 'styled-components/native';
import RootComponent from '@playground/components/RootComponent';
import { ThemeProvider } from '@cash';

const AppShell = styled(SafeAreaView)`
  flex: 1;
`;

const App = () => {
  return (
    <ThemeProvider>
      <AppShell>
        <RootComponent />
      </AppShell>
    </ThemeProvider>
  );
};

export default App;
