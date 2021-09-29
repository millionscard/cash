import styled from 'styled-components/native';
import { color, space, typography } from 'styled-system';

const Heading = styled.Text`
  ${color}
  ${space}
  ${typography}
`;

Heading.propTypes = {
  ...color.propTypes,
  ...space.propTypes,
  ...typography.propTypes,
};

Heading.defaultProps = {
  fontFamily: 'heading',
  fontSize: 'xl',
  fontWeight: 'bold',
};

export default Heading;
