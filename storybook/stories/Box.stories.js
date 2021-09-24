import React from 'react';
import { storiesOf } from '@storybook/react-native';
import Box from '../../src/Box';

storiesOf('Box', module).add('example', () => (
  <Box bg="gray.100" p={3} _text={{ color: 'gray.300' }}>
    Box
  </Box>
));
