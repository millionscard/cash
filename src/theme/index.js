import colors from './colors';
import gradients from './gradients';
import typography from './typography';
import radii from './radius';
import space from './spacing';

const theme = {
  colors,
  gradients,
  ...typography,
  radii,
  space,
};

export default theme;
