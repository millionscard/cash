import React from 'react';
import * as Cash from '@cash';

const defaultSource = {
  uri: 'https://millions.imgix.net/avatars/default-2.png?auto=format,compress&w=224',
};

export default () => (
  <>
    <Cash.Stack gap="5px" mb="20px">
      <Cash.Avatar size="sm" src={defaultSource} />
      <Cash.Avatar size="md" src={defaultSource} />
      <Cash.Avatar size="lg" src={defaultSource} />
      <Cash.Avatar size="xl" src={defaultSource} />
    </Cash.Stack>

    <Cash.Stack gap="5px">
      <Cash.Avatar size="sm" src={defaultSource} showBorder />
      <Cash.Avatar size="md" src={defaultSource} showBorder />
      <Cash.Avatar size="lg" src={defaultSource} showBorder />
      <Cash.Avatar size="xl" src={defaultSource} showBorder />
    </Cash.Stack>
  </>
);
