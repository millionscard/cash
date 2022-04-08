import React from 'react';
import Animated from 'react-native-reanimated';
import * as Cash from '@cash';
import useAnimation from '../../../src/hooks/useAnimation';

export default () => {
  const [shakeAnimationState, runShakeAnimation] = useAnimation('shake');

  return (
    <>
      <Cash.Stack gap="12px">
        <Cash.Box
          as={Animated.View}
          bg="purple.500"
          width="50px"
          height="50px"
          style={{ transform: [{ translateX: shakeAnimationState }] }}
        ></Cash.Box>
        <Cash.ButtonPrimary size="md" onPress={runShakeAnimation} isFullWidth={false} ml="auto">
          Run shake
        </Cash.ButtonPrimary>
      </Cash.Stack>
    </>
  );
};
