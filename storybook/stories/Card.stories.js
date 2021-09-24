import React from 'react';
import { storiesOf } from '@storybook/react-native';
import Card from '../../src/Card';
import Heading from '../../src/Heading';
import Button from '../../src/Button';

storiesOf('Card', module).add('Card', () => (
  <Card height={300} bg="yellow" justifyContent="space-between">
    <Heading>Heading</Heading>
    <Button>Some button</Button>
  </Card>
));
