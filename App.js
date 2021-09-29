import React from 'react';
import RootComponent from '@playground/components/RootComponent';
import { ThemeProvider } from '@cash';

const App = () => {
  return (
    <ThemeProvider>
      <RootComponent />
    </ThemeProvider>
  );
};

export default App;
