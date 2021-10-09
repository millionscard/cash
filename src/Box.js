import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import {
  space,
  color,
  typography,
  layout,
  flexbox,
  background,
  border,
  position,
} from 'styled-system';
import Text from './Text';
import sx from './sx';

const StyledBox = styled.View(
  space,
  color,
  typography,
  layout,
  flexbox,
  background,
  border,
  position,
  sx
);

const Box = ({ children, _text, ...props }) => {
  return (
    <StyledBox {...props}>
      {/** check for should render children as text */}
      {React.Children.map(children, child => {
        return typeof child === 'string' ||
          typeof child === 'number' ||
          (child?.type === React.Fragment &&
            (typeof child.props?.children === 'string' ||
              typeof child.props?.children === 'number')) ? (
          <Text {..._text}>{child}</Text>
        ) : (
          child
        );
      })}
    </StyledBox>
  );
};

Box.propTypes = {
  _text: PropTypes.object,
  sx: PropTypes.object,
};

export default Box;
