import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import Box from '@cash/Box';

const StyledPressable = styled.Pressable``;

const ButtonBase = ({ children, onPress, isDisabled, ...props }) => {
  // TODO: Refactor
  // Pass margin props to ButtonBase to be able to add spacing
  const { m, mt, mr, mb, ml, mx, my, ...resolvedProps } = props;
  const marginProps = { m, mx, my, mt, mr, mb, ml };

  return (
    <Box {...marginProps}>
      <StyledPressable onPress={onPress} disabled={isDisabled}>
        {children ? <Box {...resolvedProps}>{children}</Box> : null}
      </StyledPressable>
    </Box>
  );
};

ButtonBase.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func,
  isDisabled: PropTypes.bool,
};

export default ButtonBase;
