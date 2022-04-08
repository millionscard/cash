import Animated, { spring, Value } from 'react-native-reanimated';

const { block, clockRunning, cond, set, startClock } = Animated;

function runSpring({ clock, from, to, velocity, stiffness, damping }) {
  const state = {
    finished: new Value(0),
    position: new Value(0),
    time: new Value(0),
    velocity: new Value(0),
  };

  const config = {
    damping: new Value(0),
    mass: 1,
    overshootClamping: false,
    restDisplacementThreshold: 0.001,
    restSpeedThreshold: 0.001,
    stiffness: new Value(0),
    toValue: new Value(0),
  };

  return block([
    cond(clockRunning(clock), 0, [
      set(state.finished, 0),
      set(state.time, 0),
      set(state.position, from),
      set(state.velocity, velocity),
      set(config.toValue, to),
      set(config.damping, damping),
      set(config.stiffness, stiffness),
      startClock(clock),
    ]),
    spring(clock, state, config),
    state.position,
  ]);
}

export default runSpring;
