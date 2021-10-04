import React from 'react';
import PropTypes from 'prop-types';
import ButtonBase, { ButtonContent } from './ButtonBase';

const colorSchemes = {
  white: {
    bg: 'white',
    color: 'black.400',
  },
};

const Button = ({
  children,
  onPress,
  isDisabled,
  isFullWidth,
  isLoading,
  loadingText,
  leftIcon,
  rightIcon,
  size,
  colorScheme,
  ...props
}) => {
  const resolvedColorScheme = colorSchemes?.[colorScheme];

  return (
    <ButtonBase
      onPress={onPress}
      isDisabled={isDisabled}
      isFullWidth={isFullWidth}
      bg={resolvedColorScheme?.bg}
      {...props}
    >
      <ButtonContent
        color={resolvedColorScheme?.color}
        size={size}
        isDisabled={isDisabled}
        isLoading={isLoading}
        loadingText={loadingText}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
      >
        {children}
      </ButtonContent>
    </ButtonBase>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func,
  isDisabled: PropTypes.bool,
  isFullWidth: PropTypes.bool,
  isLoading: PropTypes.bool,
  loadingText: PropTypes.string,
  leftIcon: PropTypes.object,
  rightIcon: PropTypes.object,
  size: PropTypes.string,
  colorScheme: PropTypes.oneOf(Object.keys(colorSchemes)),
};

Button.defaultProps = {
  colorScheme: 'white',
};

export default Button;
