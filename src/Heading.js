import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { color, space, typography, variant } from 'styled-system';

const Heading = styled.Text(
  {
    fontFamily: 'Futura PT',
    fontWeight: 'bold',
  },
  color,
  space,
  typography,
  variant({
    prop: 'size',
    variants: {
      xs: { fontSize: 'md', lineHeight: '20px', letterSpacing: '-0.25px' },
      sm: { fontSize: 'xl', lineHeight: '24px', letterSpacing: '-0.25px' },
      md: { fontSize: '2xl', lineHeight: '24px', letterSpacing: '-0.5px' },
      lg: { fontSize: '3xl', lineHeight: '28px', letterSpacing: '-0.5px' },
      xl: { fontSize: '4xl', lineHeight: '32px', letterSpacing: '-0.5px' },
      '2xl': { fontSize: '5xl', lineHeight: '36px', letterSpacing: '-1px' },
      '3xl': { fontSize: '6xl', lineHeight: '48px', letterSpacing: '-2px' },
      '4xl': { fontSize: '7xl', lineHeight: '56px', letterSpacing: '-3px' },
      '5xl': { fontSize: '8xl', lineHeight: '72px', letterSpacing: '-4px' },
      '6xl': { fontSize: '9xl', lineHeight: '88px', letterSpacing: '-4px' },
    },
  })
);

Heading.propTypes = {
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl']),
  numberOfLines: PropTypes.number,
  ...color.propTypes,
  ...space.propTypes,
  ...typography.propTypes,
};

Heading.defaultProps = {
  size: 'md',
};

export default Heading;
