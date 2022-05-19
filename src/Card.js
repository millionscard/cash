import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { variant } from 'styled-system';
import Box from './Box';

const StyledCard = styled(Box)(
  variant({
    prop: 'space',
    variants: {
      none: { p: 0 },
      sm: { p: 8 },
      md: { p: 20 },
      lg: { p: 30 },
    },
  })
);

const Card = props => <StyledCard {...props} />;

Card.propTypes = {
  borderRadius: PropTypes.oneOf(['none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', 'full']),
  bg: PropTypes.string,
  space: PropTypes.oneOf(['none', 'sm', 'md', 'lg']),
};

Card.defaultProps = {
  borderRadius: 'lg',
  bg: 'white',
  space: 'md',
};

export default Card;
