import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { color, space, system, lineHeight } from 'styled-system';

const Text = styled.Text.attrs({ allowFontScaling: false })`
  font-family: ${({ theme, weight }) => theme.fonts.Inter?.[weight] || theme.fonts.Inter.regular};
  ${system({
    size: {
      property: 'fontSize',
      scale: 'fontSizes',
    },
    align: {
      property: 'textAlign',
    },
  })}
  ${color}
  ${lineHeight}
  ${space}
`;

Text.propTypes = {
  /** a value of `center`, `left` or `right` */
  align: PropTypes.oneOf(['center', 'left', 'right']),
  /** `color` from the theme */
  color: PropTypes.string,
  lineHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** `fontSizes` from the theme */
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** a value of `thin`, `extralight`, `light`, `regular`, `medium`, `semibold` , `bold`, `extrabold` or `black` */
  weight: PropTypes.oneOf([
    'thin',
    'extralight',
    'light',
    'regular',
    'medium',
    'semibold',
    'bold',
    'extrabold',
    'black',
  ]),
  /** will shorten text with an ellipsis */
  numberOfLines: PropTypes.number,
};

Text.defaultProps = {
  color: 'black.500',
  size: 'md',
  weight: 'medium',
};

Text.displayName = 'Text';

export default Text;
