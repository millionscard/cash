import React from 'react';
import * as Cash from '@cash';

export default () => (
  <Cash.Card height={300} bg="yellow.500" justifyContent="space-between">
    <Cash.Heading size="lg" mr="8">
      Link your bank account to add funds
    </Cash.Heading>
    <Cash.Button>Link bank account</Cash.Button>
  </Cash.Card>
);
