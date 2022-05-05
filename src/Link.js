import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Pressable, Linking } from 'react-native';
import Text from './Text';

const Link = ({ children, url, ...props }) => {
  const handlePress = useCallback(() => Linking.openURL(url), [url]);

  return (
    <Pressable onPress={handlePress} accessibilityRole="link">
      <Text color="purple.500" {...props}>
        {children}
      </Text>
    </Pressable>
  );
};

Link.propTypes = {
  url: PropTypes.string,
};

export default Link;
