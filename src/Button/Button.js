import React from 'react';
import PropTypes from 'prop-types';
import ButtonBase from './ButtonBase';

const Button = ({ children, ...props }) => {
  return <ButtonBase {...props}>{children}</ButtonBase>;
};

Button.propTypes = {
  children: PropTypes.element.isRequired,
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
