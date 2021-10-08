import React from 'react';
import styled from 'styled-components/native';
import { space, color, typography, layout, flexbox, background, border } from 'styled-system';
import Text from './Text';

const StyledBox = styled.View(space, color, typography, layout, flexbox, background, border);

const Box = ({ children, _text, ...props }) => {
  return (
    <StyledBox {...props}>
      {/** shouldRenderChildrenAsText */}
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

export default Box;
