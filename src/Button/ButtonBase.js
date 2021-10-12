import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { css } from 'styled-components';
import { variant, color, space, border, sizes, shadow } from 'styled-system';
import ActivityIndicator from '../ActivityIndicator';
import Box from '../Box';

const sizeProps = ['xs', 'sm', 'md', 'lg'];
const defaultSizeProp = 'lg';

// Button shell
const sizeVariants = variant({
  prop: 'size',
  variants: {
    lg: { height: 56 },
    md: { height: 46 },
    sm: { height: 30 },
  },
});

// Button spacing around text
const spaceSizeVariants = variant({
  prop: 'size',
  variants: {
    lg: { px: 4 },
    md: { px: 4 },
    sm: { px: 2 },
  },
});

// Button text size
const textSizeVariants = variant({
  prop: 'size',
  variants: {
    lg: { fontSize: 'xl' },
    md: { fontSize: 'md' },
    sm: { fontSize: 'md', fontWeight: 'semibold' },
  },
});

const isDisabledStyles = css`
  opacity: ${({ isDisabled }) => (isDisabled ? '0.3' : '1')};
`;

const hasShadowStyles = css`
  shadow-color: black.500;
  shadow-offset: 0 2px;
  shadow-opacity: 0.4;
  shadow-radius: 10px;
`;

const StyledPressable = styled.Pressable.attrs(({ onPress, isDisabled }) => ({
  onPress: isDisabled ? undefined : onPress,
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
ButtonGradient.displayName = 'ButtonBase.Gradient';

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
ButtonBackground.displayName = 'ButtonBase.Background';

const StyledButtonView = styled.View`
  height: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  ${isDisabledStyles}
  ${spaceSizeVariants}
  ${space}
`;

const StyledButtonText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: bold;
  line-height: 24px;

  ${textSizeVariants}
  ${color}
  ${space}
  ${shadow}
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
  const { fontSize, fontWeight, color, textShadow, px, py } = props;
  const textProps = { fontSize, fontWeight, color, textShadow };
  const spaceProps = { px, py };

  return (
    <StyledButtonView size={size} {...spaceProps} {...props}>
      {isLoading ? <ActivityIndicator mr="3" color={color} size="sm" /> : null}
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
ButtonContent.displayName = 'ButtonBase.Content';

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

export default Object.assign(ButtonBase, {
  Content: ButtonContent,
  Background: ButtonBackground,
  Gradient: ButtonGradient,
});
