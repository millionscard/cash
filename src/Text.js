import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { color, space, typography, shadow } from 'styled-system';

const StyledText = styled.Text`
  ${color}
  ${space}
  ${typography}
  ${shadow}
`;

const Text = ({ children, ...props }) => {
  return <StyledText {...props}>{children}</StyledText>;
};

Text.propTypes = {
  numberOfLines: PropTypes.number,
  ...color.propTypes,
  ...space.propTypes,
  ...typography.propTypes,
};

Text.defaultProps = {
  fontFamily: 'text',
  fontSize: 'md',
};

export default Text;
