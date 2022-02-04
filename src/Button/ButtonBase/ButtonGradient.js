import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';
import { space, border } from 'styled-system';
import { isDisabledStyles } from './common';

const ButtonGradient = styled(LinearGradient)`
  ${isDisabledStyles}
  ${border}
  ${space}
`;

ButtonGradient.propTypes = {
  ...border.propTypes,
};

ButtonGradient.defaultProps = {
  borderRadius: '2xl',
};

ButtonGradient.displayName = 'ButtonBase.Gradient';

export default ButtonGradient;
