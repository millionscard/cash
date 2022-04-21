import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Pressable } from 'react-native';
import RadioChecked from './svg/RadioChecked';
import RadioUnchecked from './svg/RadioUnchecked';
import Box from '../Box';
import Stack from '../Stack';

const Radio = ({ value, onPress, checked, disabled, children, ...props }) => {
  const onPressHandler = useCallback(() => {
    if (onPress && !disabled) {
      onPress(value);
    }
  }, [onPress, disabled, value]);

  return (
    <Pressable
      onPress={onPressHandler}
      accessibilityRole="radio"
      opacity={disabled ? 0.42 : 1}
      {...props}
    >
      <Stack gap="16px">
        {checked ? <RadioChecked /> : <RadioUnchecked />}
        <Box>{children}</Box>
      </Stack>
    </Pressable>
  );
};

Radio.propTypes = {
  value: PropTypes.any,
  onPress: PropTypes.func,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.node,
};

export default Radio;
