import styled from 'styled-components/native';
import { color, space, border } from 'styled-system';
import { isDisabledStyles } from './common';

const ButtonBackground = styled.View`
  ${isDisabledStyles}
  ${border}
  ${color}
  ${space}
`;

ButtonBackground.propTypes = {
  ...border.propTypes,
  ...color.propTypes,
  ...space.propTypes,
};

ButtonBackground.defaultProps = {
  borderRadius: '2xl',
};

ButtonBackground.displayName = 'ButtonBase.Background';

export default ButtonBackground;
