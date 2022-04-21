import React, { createElement, useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import Radio from './Radio';

const RadioGroup = ({ name, value, items, onChange, renderItem }) => {
  const [checked, setChecked] = useState(value);
  const changeHandler = useCallback(
    checkedValue => {
      setChecked(checkedValue);
      if (onChange) {
        onChange({ name, value: checkedValue });
      }
    },
    [name, onChange]
  );

  // Reset `checked` when `value` changes.
  useEffect(() => {
    setChecked(value);
  }, [value]);

  return (
    <View accessibilityRole="radiogroup">
      {items.map((item, index) =>
        createElement(renderItem, {
          ...item,
          onPress: changeHandler,
          checked: item.value === checked,
          key: `radio-group-item-${index}`,
        })
      )}
    </View>
  );
};

RadioGroup.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    })
  ),
  onChange: PropTypes.func,
  renderItem: PropTypes.func,
};

RadioGroup.defaultProps = {
  renderItem: Radio,
};

export default RadioGroup;
