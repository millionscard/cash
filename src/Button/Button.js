import styled from 'styled-components/native';
import ButtonBase from './ButtonBase';

const Button = ({ children, ...props }) => {
  return <ButtonBase {...props}>{children}</ButtonBase>;
};

Button.defaultProps = {
  px: 32,
  py: 18,
  borderRadius: 45,
  bg: 'white',
  alignItems: 'center',
  _text: {
    fontWeight: 'bold',
  },
};

export default Button;
