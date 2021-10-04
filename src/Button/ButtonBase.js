import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { css } from 'styled-components';
import { variant, color, space, border } from 'styled-system';
import ActivityIndicator from '../ActivityIndicator';
import Box from '../Box';

const sizeProps = ['xs', 'sm', 'md', 'lg'];
const defaultSizeProp = 'lg';
const sizeVariants = variant({
  prop: 'size',
  variants: {
    lg: {
      px: 4,
      py: 3,
    },
    md: {
      px: 4,
      py: 2,
    },
    sm: {
      px: 3,
      py: 1,
    },
  },
});

const textSizeVariants = variant({
  prop: 'size',
  variants: {
    lg: {
      fontSize: 'xl',
    },
    md: {
      fontSize: 'md',
    },
    sm: {
      fontSize: 'md',
      fontWeight: 'semibold',
    },
  },
});

const isDisabledStyles = css`
  opacity: ${({ isDisabled }) => (isDisabled ? '0.3' : '1')};
`;

const StyledPressable = styled.Pressable.attrs(({ onPress, isDisabled }) => ({
  onPress: isDisabled ? undefined : onPress,
}))`
  flex-direction: ${({ isFullWidth }) => (isFullWidth ? 'column' : 'row')};
  align-self: ${({ isFullWidth }) => (isFullWidth ? 'stretch' : 'flex-start')};
  transform: scale(${({ isPressed }) => (isPressed ? '0.99' : '1')});
  ${border}
  ${space}
  ${color}
`;
StyledPressable.propTypes = {
  onPress: PropTypes.func,
  isDisabled: PropTypes.bool,
  isFullWidth: PropTypes.bool,
  ...border.propTypes,
  ...space.propTypes,
};

const ButtonGradient = styled(LinearGradient)`
  ${isDisabledStyles}
  ${border}
  ${space}
`;
ButtonGradient.propTypes = {
  ...border.propTypes,
};
ButtonGradient.defaultProps = {
  borderRadius: '2xl',
};

const ButtonBackground = styled.View`
  ${isDisabledStyles}
  ${border}
  ${color}
  ${space}
`;
ButtonBackground.propTypes = {
  ...border.propTypes,
  ...color.propTypes,
  ...space.propTypes,
};
ButtonBackground.defaultProps = {
  borderRadius: '2xl',
};

const StyledButtonView = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  ${isDisabledStyles}
  ${sizeVariants}
  ${space}
`;

const StyledButtonText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: bold;
  line-height: 24px;
  ${textSizeVariants}
  ${color}
`;

const ButtonContent = ({
  children,
  size,
  isLoading,
  loadingText,
  leftIcon,
  rightIcon,
  ...props
}) => {
  const { fontSize, fontWeight, color: textColor } = props;
  const textProps = { fontSize, fontWeight, color: textColor };

  return (
    <StyledButtonView size={size} {...props}>
      {isLoading ? <ActivityIndicator mr="3" color={textColor} size={20} /> : null}
      {leftIcon ? <Box mr="3">{leftIcon}</Box> : null}
      <StyledButtonText size={size} {...textProps}>
        {isLoading && loadingText ? loadingText : children}
      </StyledButtonText>
      {rightIcon ? <Box ml="3">{rightIcon}</Box> : null}
    </StyledButtonView>
  );
};
ButtonContent.propTypes = {
  size: PropTypes.oneOf(sizeProps),
  isLoading: PropTypes.bool,
  loadingText: PropTypes.string,
  leftIcon: PropTypes.object,
  rightIcon: PropTypes.object,
  ...color.propTypes,
  ...space.propTypes,
};
ButtonContent.defaultProps = {
  size: defaultSizeProp,
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
      {...props}
    >
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
  ...border.propTypes,
  ...space.propTypes,
};
ButtonBase.defaultProps = {
  borderRadius: '2xl',
};

export default ButtonBase;
export { ButtonContent, ButtonBackground, ButtonGradient };
