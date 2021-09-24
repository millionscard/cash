import React from 'react';
import { storiesOf } from '@storybook/react-native';
import Button, { ButtonPrimary } from '../../src/Button';

storiesOf('Button', module)
  .add('Button', () => <Button>Button</Button>)
  .add('ButtonPrimary', () => <ButtonPrimary>Button Primary</ButtonPrimary>);
