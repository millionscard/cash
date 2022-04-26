import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Pressable } from 'react-native';
import CheckboxChecked from './svg/CheckboxChecked';
import CheckboxUnchecked from './svg/CheckboxUnchecked';
import Box from '../Box';
import Stack from '../Stack';

const Checkbox = ({ value, onPress, checked, disabled, children, ...props }) => {
  const onPressHandler = useCallback(() => {
    if (onPress && !disabled) {
      onPress(value);
    }
  }, [onPress, disabled, value]);

  return (
    <Pressable
      onPress={onPressHandler}
      accessibilityRole="checkbox"
      opacity={disabled ? 0.42 : 1}
      {...props}
    >
      <Stack gap="16px">
        {checked ? <CheckboxChecked /> : <CheckboxUnchecked />}
        <Box>{children}</Box>
      </Stack>
    </Pressable>
  );
};

Checkbox.propTypes = {
  value: PropTypes.any,
  onPress: PropTypes.func,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.node,
};

export default Checkbox;
