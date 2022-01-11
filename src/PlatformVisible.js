import PropTypes from 'prop-types';
import { Platform } from 'react-native';

const PlatformVisible = ({ target, children }) => (Platform.OS === target ? children : null);

PlatformVisible.propTypes = {
  target: PropTypes.oneOf(['android', 'ios']).isRequired,
  children: PropTypes.node.isRequired,
};

export default PlatformVisible;
