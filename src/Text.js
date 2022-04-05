import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { color, space, typography, shadow } from 'styled-system';

const StyledText = styled.Text`
  color: ${props => props.theme.colors.black['500']};
  ${color}
  ${space}
  ${typography}
  ${shadow}
`;

const Text = ({ children, ...props }) => {
  return <StyledText {...props}>{children}</StyledText>;
};

Text.propTypes = {
  /** will shorten text with an ellipsis */
  numberOfLines: PropTypes.number,
  /** `fonts` from the theme */
  fontFamily: PropTypes.oneOf(['text', 'heading']),
  /** `fontsize` from the theme */
  fontSize: PropTypes.string,
};

Text.defaultProps = {
  fontFamily: 'text',
  fontSize: 'md',
};

export default Text;
