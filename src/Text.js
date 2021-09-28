import React from 'react';
import styled from 'styled-components/native';
import { color, space, typography } from 'styled-system';

const StyledText = styled.Text`
  ${color}
  ${space}
  ${typography}
`;

const Text = ({ children, ...props }) => {
  return <StyledText {...props}>{children}</StyledText>;
};

Text.propTypes = {
  ...color.propTypes,
  ...space.propTypes,
  ...typography.propTypes,
};

Text.defaultProps = {
  fontSize: 'md',
};

export default Text;
