import React, { useState, useCallback } from 'react';
import * as Cash from '@cash';

const NumpadPasscodeExample = () => {
  const [value, setValue] = useState('');
  const numpadPressHandler = useCallback(newValue => {
    setValue(prevValue => {
      let nextValue = prevValue;
      if (nextValue === null) {
        nextValue = newValue;
      } else if (newValue === 'back') {
        nextValue = prevValue.slice(0, -1);
      } else if (nextValue.length <= 3) {
        nextValue += newValue;
      }
      return nextValue;
    });
  }, []);

  return (
    <Cash.Box>
      <Cash.OutputPasscode value={value} my="20px" />
      <Cash.Numpad onPress={numpadPressHandler} decimal={false} />
    </Cash.Box>
  );
};

export default () => (
  <>
    <NumpadPasscodeExample />
  </>
);
