import React, { useState } from 'react';
import { Switch as NativeSwitch } from 'react-native';

const Switch = () => {
  const [state, setState] = useState(false);
  const toggleHandler = () => setState(!state);

  return <NativeSwitch onValueChange={toggleHandler} value={state} />;
};

export default Switch;
