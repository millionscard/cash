import React from 'react';
import PropTypes from 'prop-types';
import ButtonBase, { ButtonGradient, ButtonContent } from './ButtonBase';

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
  size,
  colorScheme,
  ...props
}) => {
  const resolvedColorScheme = colorSchemes?.[colorScheme];
  const textProps = {
    color: resolvedColorScheme?.color,
    textShadow: resolvedColorScheme?.textShadow,
  };

  return (
    <ButtonBase onPress={onPress} isDisabled={isDisabled} isFullWidth={isFullWidth} {...props}>
      <ButtonGradient colors={resolvedColorScheme?.gradient} isDisabled={isDisabled}>
        <ButtonGradient colors={['rgba(255, 255, 255, 0.5)', 'rgba(255, 255, 255, 0)']}>
          <ButtonGradient colors={resolvedColorScheme?.gradient} m="3px">
            <ButtonContent
              size={size}
              isLoading={isLoading}
              loadingText={loadingText}
              {...textProps}
            >
              {children}
            </ButtonContent>
          </ButtonGradient>
        </ButtonGradient>
      </ButtonGradient>
    </ButtonBase>
  );
};

ButtonPrimary.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func,
  isDisabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  loadingText: PropTypes.string,
  colorScheme: PropTypes.oneOf(Object.keys(colorSchemes)),
};

ButtonPrimary.defaultProps = {
  colorScheme: 'purple',
};

export default ButtonPrimary;
