import React from 'react';
import { Text } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import Button from '../../src/Button';

storiesOf('Button', module)
  .add('example', () => <Button><Text>Button</Text></Button>)
