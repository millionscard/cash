import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { color, space, border, sizes } from 'styled-system';
import { defaultSizeProp, sizeVariants, hasShadowStyles } from './common';

const StyledPressable = styled.Pressable.attrs(({ onPress, disabled }) => ({
  onPress: disabled ? undefined : onPress,
}))`
  flex-direction: ${({ isFullWidth }) => (isFullWidth ? 'column' : 'row')};
  align-self: ${({ isFullWidth }) => (isFullWidth ? 'stretch' : 'flex-start')};
  transform: scale(${({ isPressed }) => (isPressed ? '0.99' : '1')});
  ${({ hasShadow }) => hasShadow && hasShadowStyles}
  ${sizeVariants}
  ${border}
  ${space}
  ${color}
  ${sizes}
`;

StyledPressable.propTypes = {
  onPress: PropTypes.func,
  isDisabled: PropTypes.bool,
  isFullWidth: PropTypes.bool,
  ...border.propTypes,
  ...space.propTypes,
};

const ButtonBase = ({ children, onPress, isDisabled, isFullWidth, isLoading, ...props }) => {
  const [isPressed, setIsPressed] = useState(false);
  const onPressIn = () => setIsPressed(true);
  const onPressOut = () => setIsPressed(false);

  return (
    <StyledPressable
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      isPressed={isPressed}
      disabled={isDisabled}
      isFullWidth={isFullWidth}
      accessibilityRole="button"
      {...props}
    >
      {/** TODO: forward props to children with speecific displayName */}
      {children}
    </StyledPressable>
  );
};

ButtonBase.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func,
  isDisabled: PropTypes.bool,
  isFullWidth: PropTypes.bool,
  isLoading: PropTypes.bool,
  hasShadow: PropTypes.bool,
  ...border.propTypes,
  ...space.propTypes,
};

ButtonBase.defaultProps = {
  borderRadius: '2xl',
  size: defaultSizeProp,
};

export default ButtonBase;
