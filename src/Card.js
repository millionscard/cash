import React from 'react';
import styled from 'styled-components/native';
import Box from './Box';

const StyledCard = styled(Box)``;

const Card = ({ children, props }) => <StyledCard {...props}>{children}</StyledCard>;

Card.defaultProps = {
  p: 20,
  borderRadius: 'lg',
  bg: 'white',
};

export default Card;
