import styled from 'styled-components/native';
import Box from './Box';

const Card = styled(Box)``;

Card.defaultProps = {
  p: 20,
  borderRadius: 'lg',
  bg: 'white',
};

export default Card;
