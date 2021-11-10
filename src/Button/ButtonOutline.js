import React from 'react';
import PropTypes from 'prop-types';
import ButtonBase from './ButtonBase';
import theme from '../theme';

const colorSchemes = {
  purple: {
    gradient: theme.gradients.purple,
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
  const useDisabled = isDisabled || isLoading;

  return (
    <ButtonBase
      onPress={onPress}
      isDisabled={useDisabled}
      isFullWidth={isFullWidth}
      size={size}
      {...props}
    >
      <ButtonBase.Gradient
        colors={resolvedColorScheme?.gradient.colors}
        locations={resolvedColorScheme?.gradient?.locations}
        isDisabled={useDisabled}
        p="3px"
      >
        <ButtonBase.Background bg={resolvedColorScheme?.bg}>
          <ButtonBase.Content
            size={size}
            color={resolvedColorScheme?.color}
            isLoading={isLoading}
            loadingText={loadingText}
          >
            {children}
          </ButtonBase.Content>
        </ButtonBase.Background>
      </ButtonBase.Gradient>
    </ButtonBase>
  );
};

ButtonOutline.propTypes = {
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
  /** a value of `purple` */
  colorScheme: PropTypes.oneOf(Object.keys(colorSchemes)),
};

ButtonOutline.defaultProps = {
  colorScheme: 'purple',
};

export default ButtonOutline;
