import React from 'react';
import PropTypes from 'prop-types';
import ButtonBase from './ButtonBase';

const colorSchemes = {
  purple: {
    gradient: ['#8D34FF', '#5C00D0'],
    color: 'white',
  },
  gold: {
    gradient: ['#FFDF32', '#FC8D39'],
    color: '#996E00',
    textShadow: '0px 2px 0px rgba(255, 255, 255, 0.35)',
  },
  green: {
    gradient: ['#4EDB86', '#1BA853'],
    color: 'white',
  },
};

const ButtonPrimary = ({
  children,
  onPress,
  isDisabled,
  isFullWidth,
  isLoading,
  loadingText,
  hasShadow,
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
      <ButtonBase.Gradient colors={resolvedColorScheme?.gradient} isDisabled={useDisabled}>
        <ButtonBase.Gradient colors={['rgba(255, 255, 255, 0.5)', 'rgba(255, 255, 255, 0)']}>
          <ButtonBase.Gradient colors={resolvedColorScheme?.gradient} m="3px">
            <ButtonBase.Content
              size={size}
              isLoading={isLoading}
              loadingText={loadingText}
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
  loadingText: PropTypes.string,
  hasShadow: PropTypes.bool,
  leftIcon: PropTypes.element,
  rightIcon: PropTypes.element,
  /** a value of `lg`, `md`, or `sm` */
  size: PropTypes.oneOf(['lg', 'md', 'sm']),
  /** a value of `purple`, `gold`, or `green` */
  colorScheme: PropTypes.oneOf(Object.keys(colorSchemes)),
};

ButtonPrimary.defaultProps = {
  colorScheme: 'purple',
};

export default ButtonPrimary;
