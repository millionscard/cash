import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { color, space, typography, shadow } from 'styled-system';

const Text = styled.Text.attrs({ allowFontScaling: false })`
  color: ${props => props.theme.colors.black['500']};
  ${color}
  ${space}
  ${typography}
  ${shadow}
`;

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

Text.displayName = 'Text';

export default Text;
