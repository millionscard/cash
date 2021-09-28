import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import Box from '../Box';

const StyledPressable = styled.Pressable``;

const ButtonBase = ({ children, ...props }) => {
  return (
    <StyledPressable>
      {children ? (
        <Box bg="transparent" {...props}>
          {children}
        </Box>
      ) : null}
    </StyledPressable>
  );
};

ButtonBase.propTypes = {
  children: PropTypes.node,
};

export default ButtonBase;
