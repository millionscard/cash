import React from 'react';
import PropTypes from 'prop-types';
import ButtonBase from './ButtonBase';
import theme from '../theme';

const colorSchemes = {
  purple: {
    gradient: theme.gradients.purple,
    color: 'white',
  },
  gold: {
    gradient: theme.gradients.gold,
    color: 'yellow.900',
    textShadow: '0px 2px 0px rgba(255, 255, 255, 0.35)',
  },
  danger: {
    gradient: theme.gradients.red,
    color: 'white',
  },
  success: {
    gradient: theme.gradients.green,
    color: 'white',
  },
};

const ButtonPrimary = ({
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
  const textProps = {
    color: resolvedColorScheme?.color,
    textShadow: resolvedColorScheme?.textShadow,
  };

  return (
    <ButtonBase
      onPress={onPress}
      isDisabled={useDisabled}
      isFullWidth={isFullWidth}
      hasShadow={hasShadow}
      size={size}
      {...props}
    >
      <ButtonBase.Gradient
        colors={resolvedColorScheme?.gradient.colors}
        locations={resolvedColorScheme?.gradient?.locations}
        isDisabled={useDisabled}
      >
        <ButtonBase.Gradient colors={['rgba(255, 255, 255, 0.5)', 'rgba(255, 255, 255, 0)']}>
          <ButtonBase.Gradient
            colors={resolvedColorScheme?.gradient.colors}
            locations={resolvedColorScheme?.gradient?.locations}
            m="3px"
          >
            <ButtonBase.Content
              size={size}
              isLoading={isLoading}
              leftIcon={leftIcon}
              rightIcon={rightIcon}
              {...textProps}
            >
              {children}
            </ButtonBase.Content>
          </ButtonBase.Gradient>
        </ButtonBase.Gradient>
      </ButtonBase.Gradient>
    </ButtonBase>
  );
};

ButtonPrimary.propTypes = {
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
  /** a value of `purple`, `gold`, `danger`, `success` */
  colorScheme: PropTypes.oneOf(Object.keys(colorSchemes)),
};

ButtonPrimary.defaultProps = {
  colorScheme: 'purple',
  isFullWidth: true,
};

export default ButtonPrimary;
