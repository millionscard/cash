import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import * as styledSystem from 'styled-system';
import Text from './Text';
import sx from './sx';

const { compose, system } = styledSystem;

const StyledBox = styled.View(
  system({
    shadow: {
      property: 'boxShadow',
      scale: 'shadows',
    },
  }),
  compose(
    styledSystem.space,
    styledSystem.color,
    styledSystem.typography,
    styledSystem.layout,
    styledSystem.flexbox,
    styledSystem.background,
    styledSystem.border,
    styledSystem.position
  ),
  sx
);

const BgGradient = React.memo(
  styled(LinearGradient)(
    {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
    compose(
      styledSystem.border.borderRadius,
      styledSystem.border.borderTopLeftRadius,
      styledSystem.border.borderTopRightRadius,
      styledSystem.border.borderBottomLeftRadius,
      styledSystem.border.borderBottomRightRadius
    )
  )
);

const Box = ({ children, _text, bgGradient, ...props }) => {
  return (
    <StyledBox {...props}>
      {bgGradient && (
        <BgGradient
          borderRadius={props.borderRadius}
          borderTopLeftRadius={props.borderTopLeftRadius}
          borderTopRightRadius={props.borderTopRightRadius}
          borderBottomLeftRadius={props.borderBottomLeftRadius}
          borderBottomRightRadius={props.borderBottomRightRadius}
          {...bgGradient}
        />
      )}
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
  bgGradient: PropTypes.shape({
    colors: PropTypes.arrayOf(PropTypes.string),
    locations: PropTypes.arrayOf(PropTypes.number),
  }),
  /** `shadows` from the theme */
  shadow: PropTypes.string,
  sx: PropTypes.object,
};

export default Box;
