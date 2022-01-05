---
title: Getting started
---

## Installation

To get started using Cash React Native, install the package and its peer dependencies with your package manager of choice:

with npm

```bash
npm install @millionscard/cash react react-native react-native-svg styled-components styled-system
```

with yarn

```bash
yarn add @millionscard/cash react react-native react-native-svg styled-components styled-system
```

you can now import Cash React Native from the main package module:

```js
import { Box, Text } from '@millionscard/cash';
```

### Peer dependencies

Cash React Native ships with a few libraries labeled as peer dependencies. These libraries are separated because they are commonly already installed in the host project and having multiple versions can introduce errors.

Cash React Native requires the following libraries to be installed along with it:

- `react` version 17.x
- `react-native` version 0.66.x
- `react-native-svg` version 12.x
- `styled-components` version 5.x
- `styled-system` version 5.x

## ThemeProvider

For Cash React Native to work correctly we have to add the `ThemeProvider` to the root of our application:

```jsx
import { ThemeProvider } from '@millionscard/cash';

function App() {
  return (
    <ThemeProvider>
      <>...</>
    </ThemeProvider>
  );
}
```
