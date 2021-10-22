import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { variant } from 'styled-system';
import sx from '../sx';
import Icon from '../Icon';

const iconSizes = { lg: 12, md: 10, sm: 8 };
const sizeVariants = variant({
  prop: 'size',
  variants: {
    lg: {
      width: 48,
      height: 48,
    },
    md: {
      width: 40,
      height: 40,
    },
    sm: {
      width: 24,
      height: 24,
    },
  },
});

const StyledPressable = styled.Pressable.attrs(({ onPress, disabled }) => ({
  onPress: disabled ? undefined : onPress,
}))`
  background-color: white;
  border-radius: ${({ theme, isRounded }) => (isRounded ? theme.radii.full : theme.radii.md)};
  align-items: center;
  justify-content: center;
  opacity: ${({ disabled }) => (disabled ? '0.3' : '1')};
  ${sizeVariants}
  ${sx}
`;

const ButtonIcon = ({ icon, isDisabled, ...props }) => {
  return (
    <StyledPressable disabled={isDisabled} {...props}>
      <Icon name={icon} width={iconSizes[props.size]} height={iconSizes[props.size]} />
    </StyledPressable>
  );
};

ButtonIcon.propTypes = {
  /** name of the icon */
  icon: PropTypes.string,
  /** a value of `lg`, `md`, or `sm` */
  size: PropTypes.oneOf(['lg', 'md', 'sm']),
  onPress: PropTypes.func,
  isRounded: PropTypes.bool,
  isDisabled: PropTypes.bool,
};

ButtonIcon.defaultProps = {
  icon: 'LeftArrow',
  size: 'lg',
};

export default ButtonIcon;
