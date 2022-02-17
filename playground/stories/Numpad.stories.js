import React, { useState, useCallback } from 'react';
import * as Cash from '@cash';

const NumpadExample = () => {
  const [value, setValue] = useState('');
  const numpadPressHandler = useCallback(newValue => {
    setValue(prevValue => {
      let nextValue = prevValue;
      if (nextValue === null) {
        nextValue = newValue;
      } else if (newValue === 'back') {
        nextValue = prevValue.slice(0, -1);
      } else {
        nextValue += newValue;
      }
      return nextValue;
    });
  }, []);

  return (
    <Cash.Box>
      <Cash.NumpadOutput value={value} />
      <Cash.Numpad onPress={numpadPressHandler} />
    </Cash.Box>
  );
};

export default () => (
  <>
    <NumpadExample />
  </>
);
