import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { color, space, lineHeight, system, compose } from 'styled-system';

const StyledText = styled.Text.attrs({ allowFontScaling: false })(
  ({ theme, weight, uppercase }) => ({
    fontFamily: theme.fonts.Inter?.[weight] || theme.fonts.Inter.regular,
    textTransform: uppercase ? 'uppercase' : 'none',
  }),
  compose(
    color,
    space,
    lineHeight,
    system({
      size: {
        property: 'fontSize',
        scale: 'fontSizes',
      },
      shadow: {
        property: 'textShadow',
        scale: 'shadows',
      },
      align: {
        property: 'textAlign',
      },
    })
  )
);

const Text = ({ children, ...props }) => <StyledText {...props}>{children}</StyledText>;

Text.propTypes = {
  /** a value of `center`, `left` or `right` */
  align: PropTypes.oneOf(['center', 'left', 'right']),
  /** `color` from the theme */
  color: PropTypes.string,
  lineHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** `fontSizes` from the theme */
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** a value of `thin`, `extralight`, `light`, `regular`, `medium`, `semibold` , `bold`, `extrabold` or `black` */
  weight: PropTypes.oneOf([
    'thin',
    'extralight',
    'light',
    'regular',
    'medium',
    'semibold',
    'bold',
    'extrabold',
    'black',
  ]),
  /** `shadows` from the theme */
  shadow: PropTypes.string,
  /** will shorten text with an ellipsis */
  numberOfLines: PropTypes.number,
  /** converts all characters to uppercase */
  uppercase: PropTypes.bool,
};

Text.defaultProps = {
  color: 'black.500',
  size: 'md',
  weight: 'medium',
};

export default Text;
