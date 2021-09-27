import React from 'react';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';
import ButtonBase from './ButtonBase';
import Box from '../Box';

const ButtonPrimary = ({ children, ...props }) => {
  const { _text } = props;
  return (
    <ButtonBase {...props}>
      <LinearGradient
        colors={['#a45dff', '#712acc']}
        start={{ x: 0.0, y: 0.25 }}
        end={{ x: 0.5, y: 1.0 }}
        style={{ borderRadius: 45 }}
      >
        <Box m={1} py={18} px={32} alignItems="center" _text={_text} bg="#8D34FF" borderRadius={45}>
          {children}
        </Box>
      </LinearGradient>
    </ButtonBase>
  );
};

ButtonPrimary.propTypes = {
  children: PropTypes.element.isRequired,
  _text: PropTypes.object,
};

ButtonPrimary.defaultProps = {
  p: 0,
  _text: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
};

export default ButtonPrimary;
