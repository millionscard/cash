import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { variant, color, space } from 'styled-system';

const sizeVariants = variant({
  prop: 'size',
  variants: {
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
});

const Heading = styled.Text.attrs({ allowFontScaling: false })`
  font-family: ${({ theme, weight }) => theme.fonts.FuturaPT[weight]};
  text-align: ${({ align }) => align};
  ${sizeVariants}
  ${color}
  ${space}
`;

Heading.propTypes = {
  /** a value of `center`, `left` or `right` */
  align: PropTypes.oneOf(['center', 'left', 'right']),
  /** `color` from the theme */
  color: PropTypes.string,
  /** results in smaller or larger Heading text size */
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl']),
  /** a value of `light`, `book`, `medium`, `demi`, `bold`, `heavy` or `extrabold` */
  weight: PropTypes.oneOf(['light', 'book', 'medium', 'demi', 'bold', 'heavy', 'extrabold']),
  /** will shorten text with an ellipsis */
  numberOfLines: PropTypes.number,
};

Heading.defaultProps = {
  align: 'left',
  color: 'black.500',
  size: 'md',
  weight: 'bold',
};

Heading.displayName = 'Heading';

export default Heading;
