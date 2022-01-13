import React from 'react';
import * as Cash from '@cash';

const defaultSource = {
  uri: 'https://millions.imgix.net/avatars/default-2.png?auto=format,compress&w=224',
};

export default () => (
  <Cash.Stack gap="5px">
    <Cash.Avatar size="sm" src={defaultSource} />
    <Cash.Avatar size="md" src={defaultSource} />
    <Cash.Avatar size="lg" src={defaultSource} />
    <Cash.Avatar size="xl" src={defaultSource} />
  </Cash.Stack>
);
