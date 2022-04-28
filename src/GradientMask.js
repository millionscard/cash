import React from 'react';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
import Box from './Box';

const GradientMask = ({ children, ...props }) => {
  return (
    <MaskedView maskElement={<Box>{children}</Box>}>
      <LinearGradient {...props}>
        <Box opacity="0">{children}</Box>
      </LinearGradient>
    </MaskedView>
  );
};

GradientMask.propTypes = {
  /** array of at least two color values that represent gradient colors */
  colors: PropTypes.array,
  /** optional array of numbers defining the location of each gradient color stop, mapping to the color with the same index in colors prop */
  locations: PropTypes.array,
  /** optional object declares the position that the gradient starts at */
  start: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  }),
  /** optional object declares the position that the gradient ends at */
  end: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  }),
  /** children of the component */
  children: PropTypes.node,
};

GradientMask.defaultProps = {
  colors: ['#8D34FF', '#3600CC'],
  start: { x: 0, y: 0 },
  end: { x: 0, y: 1 },
};

export default GradientMask;
