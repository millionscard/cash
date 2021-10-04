import React from 'react';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
import Text from './Text';

const GradientText = ({ colors, coordinates, ...props }) => {
  return (
    <MaskedView maskElement={<Text {...props} />}>
      <LinearGradient colors={colors} {...coordinates}>
        <Text opacity="0" {...props} />
      </LinearGradient>
    </MaskedView>
  );
};

GradientText.propTypes = {
  colors: PropTypes.array,
  coordinates: PropTypes.object,
};

GradientText.defaultProps = {
  colors: ['#8D34FF', '#FF006E'],
  // Horizontal gradient
  coordinates: {
    start: { x: 0, y: 0 },
    end: { x: 1, y: 0 },
  },
};

export default GradientText;
