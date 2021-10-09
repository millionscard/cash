import React from 'react';
import PropTypes from 'prop-types';
import ButtonBase from './ButtonBase';

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
  const useDisabled = isDisabled || isLoading;

  return (
    <ButtonBase
      onPress={onPress}
      isDisabled={useDisabled}
      isFullWidth={isFullWidth}
      bg={resolvedColorScheme?.bg}
      size={size}
      {...props}
    >
      <ButtonBase.Content
        color={resolvedColorScheme?.color}
        size={size}
        isDisabled={useDisabled}
        isLoading={isLoading}
        loadingText={loadingText}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
      >
        {children}
      </ButtonBase.Content>
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
  leftIcon: PropTypes.element,
  rightIcon: PropTypes.element,
  /** a value of `lg`, `md`, or `sm` */
  size: PropTypes.oneOf(['lg', 'md', 'sm']),
  /** a value of `white` */
  colorScheme: PropTypes.oneOf(Object.keys(colorSchemes)),
};

Button.defaultProps = {
  colorScheme: 'white',
};

export default Button;
