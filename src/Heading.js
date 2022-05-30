import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { variant, color, space, lineHeight, system, compose } from 'styled-system';

const StyledHeading = styled.Text.attrs({ allowFontScaling: false })(
  ({ theme, weight }) => ({
    fontFamily: theme.fonts.FuturaPT?.[weight] || theme.fonts.FuturaPT.demi,
  }),
  compose(
    color,
    space,
    lineHeight,
    system({
      align: {
        property: 'textAlign',
      },
      shadow: {
        property: 'textShadow',
        scale: 'shadows',
      },
    }),
    variant({
      prop: 'size',
      variants: {
        '4xs': { fontSize: '2xs', lineHeight: '12px' },
        '3xs': { fontSize: 'xs', lineHeight: '14px' },
        '2xs': { fontSize: 'sm', lineHeight: '16px' },
        xs: { fontSize: 'md', lineHeight: '20px', letterSpacing: '-0.25px' },
        sm: { fontSize: 'xl', lineHeight: '24px', letterSpacing: '-0.25px' },
        md: { fontSize: '2xl', lineHeight: '24px', letterSpacing: '-0.5px' },
        lg: { fontSize: '3xl', lineHeight: '28px', letterSpacing: '-0.5px' },
        xl: { fontSize: '4xl', lineHeight: '32px', letterSpacing: '-0.5px' },
        '2xl': { fontSize: '5xl', lineHeight: '38px', letterSpacing: '-1px' },
        '3xl': { fontSize: '6xl', lineHeight: '50px', letterSpacing: '-2px' },
        '4xl': { fontSize: '7xl', lineHeight: '62px', letterSpacing: '-3px' },
        '5xl': { fontSize: '8xl', lineHeight: '82px', letterSpacing: '-4px' },
        '6xl': { fontSize: '9xl', lineHeight: '98px', letterSpacing: '-4px' },
      },
    })
  )
);

const Heading = ({ children, ...props }) => <StyledHeading {...props}>{children}</StyledHeading>;

Heading.propTypes = {
  /** a value of `center`, `left` or `right` */
  align: PropTypes.oneOf(['center', 'left', 'right']),
  /** `color` from the theme */
  color: PropTypes.string,
  lineHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** results in smaller or larger Heading text size */
  size: PropTypes.oneOf([
    '4xs',
    '3xs',
    '2xs',
    'xs',
    'sm',
    'md',
    'lg',
    'xl',
    '2xl',
    '3xl',
    '4xl',
    '5xl',
    '6xl',
  ]),
  /** a value of `light`, `book`, `medium`, `demi`, `bold`, `heavy` or `extrabold` */
  weight: PropTypes.oneOf(['light', 'book', 'medium', 'demi', 'bold', 'heavy', 'extrabold']),
  /** `shadows` from the theme */
  shadow: PropTypes.string,
  /** will shorten text with an ellipsis */
  numberOfLines: PropTypes.number,
};

Heading.defaultProps = {
  color: 'black.500',
  size: 'md',
  weight: 'demi',
};

export default Heading;
