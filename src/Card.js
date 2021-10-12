import React from 'react';
import styled from 'styled-components/native';
import Box from './Box';

const StyledCard = styled(Box)``;

const Card = props => <StyledCard {...props} />;

Card.defaultProps = {
  p: 20,
  borderRadius: 'lg',
  bg: 'white',
};

export default Card;
