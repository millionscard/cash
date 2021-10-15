import React from 'react';
import * as Cash from '@cash';

export default () => (
  <>
    <Cash.Card height={300} bg="yellow.500" justifyContent="space-between" mb={5}>
      <Cash.Heading size="lg" mr="8">
        Link your bank account to add funds
      </Cash.Heading>
      <Cash.Button>Link bank account</Cash.Button>
    </Cash.Card>

    <Cash.Card bg="purple.100" borderRadius="2xl" space="lg">
      <Cash.Heading size="lg" mr="8">
        Link your bank account to add funds
      </Cash.Heading>
      <Cash.ButtonPrimary mt="4">Link bank account</Cash.ButtonPrimary>
    </Cash.Card>
  </>
);
