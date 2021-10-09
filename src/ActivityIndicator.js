import React from 'react';
import PropTypes from 'prop-types';
import { MaterialIndicator } from 'react-native-indicators';
import theme from './theme';
import Box from './Box';

const sizeMap = {
  sm: 20,
  md: 30,
  lg: 50,
};

const ActivityIndicator = ({ size: sizeKey, color, ...props }) => {
  const size = sizeMap[sizeKey];
  // TODO: refactor themeGet()
  const [colorName, colorShade] = color?.split('.');
  const resolvedColor = colorName && colorShade ? theme.colors[colorName][colorShade] : color;
  return (
    <Box {...props}>
      <MaterialIndicator size={size} color={resolvedColor} />
    </Box>
  );
};

ActivityIndicator.propTypes = {
  size: PropTypes.oneOf(Object.keys(sizeMap)),
  color: PropTypes.string,
};

ActivityIndicator.defaultProps = {
  size: 'md',
  color: 'purple.500',
};

export default ActivityIndicator;
