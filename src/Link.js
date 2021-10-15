import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Pressable, Linking } from 'react-native';
import Box from './Box';
import Text from './Text';

const Link = ({ children, url, color, ...props }) => {
  const handlePress = useCallback(() => Linking.openURL(url), [url]);

  return (
    <Pressable onPress={handlePress}>
      <Box {...props}>
        <Text color={color}>{children}</Text>
      </Box>
    </Pressable>
  );
};

Link.propTypes = {
  url: PropTypes.string,
  color: PropTypes.string,
};

Link.defaultProps = {
  color: 'purple.500',
};

export default Link;
