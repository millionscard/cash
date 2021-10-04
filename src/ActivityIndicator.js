import React from 'react';
import { MaterialIndicator } from 'react-native-indicators';
import theme from '@cash/theme';
import Box from '@cash/Box';

const ActivityIndicator = ({ color, size, ...props }) => {
  const [colorName, colorShade] = color?.split('.');
  const resolvedColor = colorName && colorShade ? theme.colors[colorName][colorShade] : color;

  return (
    <Box {...props}>
      <MaterialIndicator size={size} color={resolvedColor} />
    </Box>
  );
};

ActivityIndicator.defaultProps = {
  color: 'purple.500',
  size: 30,
};

export default ActivityIndicator;
