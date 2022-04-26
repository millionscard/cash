import React from 'react';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
import Box from './Box';

const GradientMask = ({ colors, coordinates, children }) => {
  return (
    <MaskedView maskElement={<Box>{children}</Box>}>
      <LinearGradient colors={colors} {...coordinates}>
        <Box opacity="0">{children}</Box>
      </LinearGradient>
    </MaskedView>
  );
};

GradientMask.propTypes = {
  /** array of at least two color values that represent gradient colors */
  colors: PropTypes.array,
  /** declares the position that the gradient starts at */
  coordinates: PropTypes.object,
  /** children of the component */
  children: PropTypes.node,
};

GradientMask.defaultProps = {
  colors: ['#8D34FF', '#FF006E'],
  /** Horizontal gradient */
  coordinates: {
    start: { x: 0, y: 0 },
    end: { x: 1, y: 0 },
  },
};

export default GradientMask;
