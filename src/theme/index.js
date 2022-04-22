import colors from './colors';
import gradients from './gradients';
import typography from './typography';
import radii from './radius';
import shadows from './shadows';
import space from './spacing';

const theme = {
  colors,
  gradients,
  ...typography,
  radii,
  shadows,
  space,
};

export default theme;
