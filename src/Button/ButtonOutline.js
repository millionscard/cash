import React from 'react';
import PropTypes from 'prop-types';
import ButtonBase, { ButtonBackground, ButtonGradient, ButtonContent } from './ButtonBase';

const colorSchemes = {
  purple: {
    gradient: ['#8D34FF', '#5C00D0'],
    bg: 'white',
    color: 'purple.600',
  },
};

const ButtonOutline = ({
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

  return (
    <ButtonBase onPress={onPress} isDisabled={isDisabled} isFullWidth={isFullWidth} {...props}>
      <ButtonGradient colors={resolvedColorScheme?.gradient} isDisabled={isDisabled} p="3px">
        <ButtonBackground bg={resolvedColorScheme?.bg}>
          <ButtonContent
            size={size}
            color={resolvedColorScheme?.color}
            isLoading={isLoading}
            loadingText={loadingText}
          >
            {children}
          </ButtonContent>
        </ButtonBackground>
      </ButtonGradient>
    </ButtonBase>
  );
};

ButtonOutline.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func,
  isDisabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  loadingText: PropTypes.string,
  size: PropTypes.string,
  colorScheme: PropTypes.string,
};

ButtonOutline.defaultProps = {
  colorScheme: 'purple',
};

export default ButtonOutline;
