import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { color, space, system } from 'styled-system';

const Text = styled.Text.attrs({ allowFontScaling: false })`
  font-family: ${({ theme, weight }) => theme.fonts.SFProText[weight]};
  text-align: ${({ align }) => align};
  ${system({
    size: {
      property: 'fontSize',
      scale: 'fontSizes',
    },
  })}
  ${color}
  ${space}
`;

Text.propTypes = {
  /** a value of `center`, `left` or `right` */
  align: PropTypes.oneOf(['center', 'left', 'right']),
  /** `color` from the theme */
  color: PropTypes.string,
  /** `fontSizes` from the theme */
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** a value of `regular`, `medium` or `bold` */
  weight: PropTypes.oneOf(['regular', 'medium', 'bold']),
  /** will shorten text with an ellipsis */
  numberOfLines: PropTypes.number,
};

Text.defaultProps = {
  align: 'left',
  color: 'black.500',
  size: 'md',
  weight: 'regular',
};

Text.displayName = 'Text';

export default Text;
