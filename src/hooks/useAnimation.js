import { useCallback, useMemo, useState } from 'react';
import { Clock, Value } from 'react-native-reanimated';
import runSpring from '../animations/run-spring';

const animations = {
  shake: () =>
    runSpring({
      clock: new Clock(),
      from: -30,
      to: 0,
      velocity: 1,
      stiffness: 1000,
      damping: 10,
    }),
};

function useAnimation(animation, options = {}) {
  const [animationState, setAnimationState] = useState(new Value(0));
  const animationFunction = useMemo(() => animations[animation], [animation]);
  const runAnimation = useCallback(
    () => setAnimationState(animationFunction(options)),
    [animationFunction, options]
  );
  return [animationState, runAnimation];
}

export default useAnimation;
