import styled from 'styled-components/native';
import { color, space, typography } from 'styled-system';

const Text = styled.Text`
  ${color}
  ${space}
  ${typography}
`;

Text.propTypes = {
  ...color.propTypes,
  ...space.propTypes,
  ...typography.propTypes,
};

Text.defaultProps = {
  fontSize: 'md',
};

export default Text;
