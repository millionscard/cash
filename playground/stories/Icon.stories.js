import React from 'react';
import * as Cash from '@cash';

const icons = ['LeftArrow', 'RightArrow'];

export default () => (
  <>
    <Cash.Box flexDirection="row">
      {icons.map((iconName, idx) => (
        <Cash.Box m="2" key={`${iconName}-${idx}`}>
          <Cash.Icon name={iconName} />
        </Cash.Box>
      ))}
    </Cash.Box>
  </>
);
