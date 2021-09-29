import React from 'react';
import PropTypes from 'prop-types';
import ButtonBase from './ButtonBase';

const Button = ({ children, ...props }) => {
  return <ButtonBase {...props}>{children}</ButtonBase>;
};

Button.propTypes = {
  children: PropTypes.node,
};

Button.defaultProps = {
  bg: 'white',
  borderRadius: '2xl',
  px: 32,
  py: 18,
  _text: {
    textAlign: 'center',
    fontFamily: 'Futura PT Bold',
    fontWeight: 'bold',
    fontSize: 'xl',
  },
};

export default Button;
