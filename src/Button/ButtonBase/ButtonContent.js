import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { color as colorSystemProp, space, shadow } from 'styled-system';
import {
  sizeProps,
  defaultSizeProp,
  isDisabledStyles,
  spaceSizeVariants,
  textSizeVariants,
} from './common';
import ActivityIndicator from '../../ActivityIndicator';
import Box from '../../Box';

const StyledButtonView = styled.View`
  height: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  ${isDisabledStyles}
  ${spaceSizeVariants}
  ${space}
`;

const StyledButtonText = styled.Text.attrs({ allowFontScaling: false })`
  ${({ theme }) => theme.fonts.FuturaPT.bold};
  line-height: 24px;
  ${textSizeVariants}
  ${colorSystemProp}
  ${space}
  ${shadow}
`;

const ButtonContent = ({ children, size, isLoading, leftIcon, rightIcon, ...props }) => {
  const { fontSize, fontWeight, color, textShadow, px, py } = props;
  const textProps = { fontSize, fontWeight, color, textShadow };
  const spaceProps = { px, py };

  return (
    <StyledButtonView size={size} {...spaceProps} {...props}>
      {isLoading ? (
        <ActivityIndicator color={color} size="sm" />
      ) : (
        <>
          {leftIcon ? <Box mr="2">{leftIcon}</Box> : null}
          <StyledButtonText size={size} {...textProps}>
            {children}
          </StyledButtonText>
          {rightIcon ? <Box ml="2">{rightIcon}</Box> : null}
        </>
      )}
    </StyledButtonView>
  );
};

ButtonContent.propTypes = {
  size: PropTypes.oneOf(sizeProps),
  isLoading: PropTypes.bool,
  leftIcon: PropTypes.object,
  rightIcon: PropTypes.object,
  ...colorSystemProp.propTypes,
  ...space.propTypes,
};

ButtonContent.defaultProps = {
  size: defaultSizeProp,
};

ButtonContent.displayName = 'ButtonBase.Content';

export default ButtonContent;
