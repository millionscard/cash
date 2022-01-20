import React from 'react';
import PropTypes from 'prop-types';
import ButtonBase from './ButtonBase';

const colorSchemes = {
  white: {
    bg: 'white',
    color: 'black.400',
  },
  translucent: {
    bg: 'rgba(255, 255, 255, 0.25)',
    color: 'white',
  },
};

const Button = ({
  children,
  onPress,
  isDisabled,
  isFullWidth,
  isLoading,
  hasShadow,
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
      hasShadow={hasShadow}
      size={size}
      {...props}
    >
      <ButtonBase.Background bg={resolvedColorScheme?.bg} isDisabled={useDisabled}>
        <ButtonBase.Content
          color={resolvedColorScheme?.color}
          size={size}
          isLoading={isLoading}
          leftIcon={leftIcon}
          rightIcon={rightIcon}
        >
          {children}
        </ButtonBase.Content>
      </ButtonBase.Background>
    </ButtonBase>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func,
  isDisabled: PropTypes.bool,
  isFullWidth: PropTypes.bool,
  isLoading: PropTypes.bool,
  hasShadow: PropTypes.bool,
  leftIcon: PropTypes.element,
  rightIcon: PropTypes.element,
  /** a value of `lg`, `md`, or `sm` */
  size: PropTypes.oneOf(['lg', 'md', 'sm']),
  /** a value of `white` or `translucent` */
  colorScheme: PropTypes.oneOf(['white', 'translucent']),
};

Button.defaultProps = {
  colorScheme: 'white',
  isFullWidth: true,
};

export default Button;
