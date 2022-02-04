import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import sx from '../sx';
import Box from '../Box';

const StyledPressable = styled.Pressable.attrs(({ onPress, disabled }) => ({
  onPress: disabled ? undefined : onPress,
}))`
  background: transparent;
  flex-direction: row;
  align-items: center;
  align-self: flex-start;
  ${sx}
`;

const StyledText = styled.Text`
  ${({ theme }) => theme.fonts.FuturaPT.medium};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.purple['500']};
  opacity: ${({ disabled }) => (disabled ? '0.3' : '1')};
`;

const ButtonGhost = ({ children, leftIcon, rightIcon, isDisabled, ...props }) => {
  return (
    <StyledPressable disabled={isDisabled} {...props}>
      {leftIcon ? <Box mr="2">{leftIcon}</Box> : null}
      <StyledText>{children}</StyledText>
      {rightIcon ? <Box ml="2">{rightIcon}</Box> : null}
    </StyledPressable>
  );
};

ButtonGhost.propTypes = {
  children: PropTypes.string,
  onPress: PropTypes.func,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  isDisabled: PropTypes.bool,
};

export default ButtonGhost;
