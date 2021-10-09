import React from 'react';
import PropTypes from 'prop-types';
import { MaterialIndicator } from 'react-native-indicators';
import theme from './theme';
import Box from './Box';

const ActivityIndicator = ({ color, size, ...props }) => {
  const [colorName, colorShade] = color?.split('.');
  const resolvedColor = colorName && colorShade ? theme.colors[colorName][colorShade] : color;
  return (
    <Box {...props}>
      <MaterialIndicator size={size} color={resolvedColor} />
    </Box>
  );
};

ActivityIndicator.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
};

ActivityIndicator.defaultProps = {
  color: 'purple.500',
  size: 30,
};

export default ActivityIndicator;
